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

}

function view(){

}

function viewAllEmployees(){

}

function viewByDepartment(){

}

function viewByRole(){

}