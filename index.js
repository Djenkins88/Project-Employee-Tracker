inquirer
    .prompt([
       {
        type: "list",
        name: "Choose an option",
        message: "Choose one of the following.",
        choices:["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role",]
      },
      {
        type: "input",
        name: "managerID",
        message: "Enter manager employee id",
      },
      {
        type: "input",
        name: "managerEmail",
        message: "Enter manager email.",
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "Enter manager office number.",
      },
    ])
  
    .then(answers => {
      let manager = new Manager(answers.managerName,answers.managerID,answers.managerEmail,answers.managerOfficeNumber);
      teamMembers.push(manager);
      userChoice();
    });

function addIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "Enter intern name",
      },
      {
        type: "input",
        name: "internID",
        message: "Enter intern employee ID.",
      },
      {
        type: "input",
        name: "internEmail",
        message: "Enter intern's email.",
      },
      {
        type: "input",
        name: "internSchool",
        message: "Enter intern's school.",
      },
    ])

    .then(answers => {
      let intern = new Intern(answers.internName,answers.internID,answers.internEmail,answers.internSchool);
      teamMembers.push(intern);
      userChoice();
    });
}

  function addEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "engineerName",
          message: "Enter engineer name",
        },
        {
          type: "input",
          name: "engineerID",
          message: "Enter enigneer employee ID.",
        },
        {
          type: "input",
          name: "engineerEmail",
          message: "Enter engineer email.",
        },
        {
          type: "input",
          name: "engineerGithub",
          message: "Enter engineers Github username.",
        },
      ])

      .then(answers => {
        let engineer = new Engineer(answers.engineerName,answers.engineerID,answers.engineerEmail,answers.engineerGithub);
        teamMembers.push(engineer);
        userChoice();
      });
  }

 
  function userChoice(){
  inquirer
  .prompt([ 
    {
          name:"additionalTeamMember",
          type: "list",
          message: "select team members to add",
          choices: ["Engineer", "Intern", "generateHTML", "Exit"]
    }   
  ]) 
    .then(answers => {
      switch(answers.additionalTeamMember) {
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;
        default:
          generateHTML();
        }
    });
  }



  function generateHTML()
  {
    fs.writeFileSync('./dist/index.html',"");
    let htmlData = generateInitialHTML();
    for(var a in teamMembers)
    {
      htmlData += generateTeamMemberHtml(teamMembers[a]);
    }
    htmlData += generateFinalHtml();
    fs.writeFileSync('./dist/index.html',htmlData);
  }