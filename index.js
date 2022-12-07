const inquirer = require('inquirer');
const fs = require('fs');
const { getSystemErrorName } = require('util');

const Employee = require('./Classes/Employee');
const Engineer = require('./Classes/Engineer');
const Intern = require('./Classes/Intern');
const Manager = require('./Classes/Manager');
const HTMLGenerate = require('./src/generateHTML');

console.log(HTMLGenerate);

var manager = {};
var employeeList = [];

function questions() {
employeeList = [];
inquirer
    .prompt([
        {
            type: 'input',
            message: `Please enter the team manager's name`,
            name: 'managerName'
        },
        {
            type: 'input',
            message: `What is the team managers employee ID?`,
            name: 'managerID'
        },
        {
            type: 'input',
            message: `What is the team manager's email address?`,
            name: 'managerEmail'
        },
        {
            type: 'input',
            message: `What is the team manager's office number?`,
            name: 'officeNumber'
        }
    ])
    .then((response) => {
        manager = new Manager(response.managerName, response.managerID, response.managerEmail, response.officeNumber);
        employeeList.push(manager); 
        addEmployees();
    });
};

function addEmployees() {
inquirer
    .prompt([
        {
            type: 'list',
            message: 'Add Another Employee?',
            choices: ['Engineer','Intern','No Additional Employees'],
            name: 'employeeAddition'
        }
    ])
    .then((response) => {
        console.log(response)
        if(response.employeeAddition == 'Engineer'){
            addEngineer()
        } else if (response.employeeAddition == 'Intern') {
            addIntern();
        } else {
            //generateHTML();
            fullHTML = HTMLGenerate(manager, employeeList);
            fs.writeFile('index.HTML',fullHTML, function(err){console.log(err)});
        }            
    })
};

function addEngineer() {
inquirer
    .prompt([
        {
            type: 'input',
            message: `What is the engineer's name?`,
            name: 'engineerName'
        },
        {
            type: 'input',
            message: `What is the engineer's employee ID?`,
            name: 'engineerID'
        },
        {
            type: 'input',
            message: `What is the engineer's email address?`,
            name: 'engineerEmail'
        },
        {
            type: 'input',
            message: `What is the engineer's GitHub username?`,
            name: 'engineerGithub'
        }
    ])
    .then((response) => {
        var engine = new Engineer(response.engineerName, response.engineerID, response.engineerEmail, response.engineerGithub);
        employeeList.push(engine);
        addEmployees();
    })
};

function addIntern() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: `What is the intern's name?`,
                name: 'internName'
            },
            {
                type: 'input',
                message: `What is the intern's employee ID?`,
                name: 'internID'
            },
            {
                type: 'input',
                message: `What is the intern's email address?`,
                name: 'internEmail'
            },
            {
                type: 'input',
                message: `What school does this intern attend?`,
                name: 'internSchool'
            }
        ])
        .then((response) => {
            response.jobType = 'Intern'
            let INTERN = new Intern(response.internName, response.internID, response.internEmail, response.internSchool);
            employeeList.push(INTERN);
            addEmployees();
        })
    };



questions();

