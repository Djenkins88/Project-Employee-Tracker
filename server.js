//Dependencies
const inquirer = require("inquirer");
const mysql = require("mysql");
const cTable = require("console.table");

const connection = mysql.createConnection({
    host: "localhost",

    //PORT
    port: 3306,
    
    //USERNAME
    user:"root",

    //PASSWORD
    password: "B737jk$%Qy**",
    database: "employee_db"
});

// Connect to mySql server
connection.connect(function(err){
    if(err) throw err;
    console.log("SQL connected");

    //start function here
    start();
});

function start(){
    inquirer
    .prompt([
        {
            type: "list",
            name: "Start",
            message: "Choose one of the following.",
            choices: ["View", "Add", "Update", "Exit"]
        }
    ]).then (function(res){
        switch(res.start){
            case "View":
                view();
                break;
            case "Add":
                add();
                break;
            case "Update":
                updateEmployee();
            break;
            case "Exit":
                console.log("--------------------------------");
                console.log("All done");
               // console.log"---------------------------------");
                break;
            default:
                console.log("default");
        }
    });


function view(){

}

function viewAllEmployees(){

}

function viewByDepartment(){

}

function viewByRole(){

}