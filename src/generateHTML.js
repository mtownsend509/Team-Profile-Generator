const Employee = require('../Classes/Employee');
const Engineer = require('../Classes/Engineer');
const Intern = require('../Classes/Intern');
const Manager = require('../Classes/Manager');

function generateHTML(manager, employeeList) {
    //this variable is the top part of the HTML to be concatenated later
    const topHTML =  `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link rel = "stylesheet" href = "./index.css">
</head>

<header>

<h1>My Team</h1>

</header>

<body>

<div id="cardContainer">

    <div class= "outerCard">
        <div class = "innerCardTop">
    <h1>Manager:</h1>
    <h2>${manager.name}</h2>
        </div>
        <div class = "innerCardBottom">
    <h2>ID #: ${manager.ID}</h2>
    <h2>Email:<a href="mailto:${manager.email}">${manager.email}</a></h2>
    <h2>Office #: ${manager.officeNumber}</h2>
        </div>
    </div>

`

//This part creates a variable called midHTML, the for loop adds a card every iteration looping through the employeeList array I make with inquirer
    var midHTML = ''

for (var i = 0; i < (employeeList.length); i++) {
    if (employeeList[i] instanceof Intern) {
        midHTML = midHTML + `   <div class = "outerCard">
        <div class = "innerCardTop">   
    <h1>Intern:</h1>
    <h2>${employeeList[i].name}</h2>
        </div>
        <div class = "innerCardBottom">
    <h2>ID #: ${employeeList[i].ID}</h2>
    <h2>Email:<a href="mailto:${employeeList[i].email}">${employeeList[i].email}</a></h2>
    <h2>School: ${employeeList[i].School}</h2>
        </div>
    </div>

`
    } else if (employeeList[i] instanceof Engineer) {
        midHTML = midHTML + `   <div class = "outerCard">
        <div class = "innerCardTop">
    <h1>Engineer:</h1>
    <h2>${employeeList[i].name}</h2>
        </div>
        <div class = "innerCardBottom">
    <h2>ID #: ${employeeList[i].ID}</h2>
    <h2>Email:<a href="mailto:${employeeList[i].email}">${employeeList[i].email}</a></h2>
    <h2>GitHub:<a href="https://github.com/${employeeList[i].GitHub}">${employeeList[i].GitHub}</h2>
        </div>
    </div>

` 
    };
};

//ends the html file
    const botHTML = `
</div>
</body>
</html>`;

    // puts the top mid and bot together to make one HTML string and writes it to index.html
     var fullHTML = topHTML + midHTML + botHTML;
     return fullHTML;
};

module.exports = generateHTML;