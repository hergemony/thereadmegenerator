// Description
// Table of contents
// Installation instructions
// Usage information
// License -  when I choose a license for my application from a list of options, 
//then a badge for that license is added near the top of the README
// and a notice is added to the section of the README entitled License that explains which license the application is covered under

// Contribution Guidelines
// Tests
// Questions


//this app is used to generate a readme file for our user
//use inquirer to ask user questions
const inquirer = require("inquirer");

inquirer.prompt([
    {
        type: "input",
        message: "What is the title of your project?",
        name: "Title",
    },
    {
        type: "input",
        message: "What is the description of your project?",
        name: "Description",

    },
    {
        type: "input",
        message: "Create your Table of Contents",
        name: "Table of Contents",
    },
{
    type: "input",
    message: "Installation Instructions",
    name: "Installation Instructions",
},
{
    type: "input",
    message: "Usage Information",
    name: "Usage Information",
},

]).then(function(answers){

    console.log(answers);
});