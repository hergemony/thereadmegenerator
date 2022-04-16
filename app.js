let title = "ReadMeGenerator";
console.log(title);

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

        type: "input",
        message: "What is the description of your project?",
        name: "Description",

        type: "input",
        message: "Create your Table of Contents",
        name: "Table of Contents",

        type: "input",
        message: "Installation Instructions",
        name: "Installation Instructions",

        type: "input",
        message: "Usage Information",
        name: "Usage Information",

        type: "list",
        message: "What license is the application covered under?",
        choices: [
            "MIT",
            "Apache-2.0",
            "GPL-3.0",
            "BSD-2-Clause",
            "BSD-3-Clause",
            "BSD-4-Clause",
        ],

        type: "input",
        message: "What tests have been performed?",
        name: "Tests",

        type:"input",
        message: "Insert Screenshots of the application",
        name: "Screenshots",

        type: "input",
        message: "Insert Demo video of the application",
        name: "Video Demo",

        type: "input",
        message: "Github features",
        name: "Github features",

        type: "input",
        message: "Acknowledgements",
        name: "Acknowledgements",

        type: "input",
        message: "Insert Company Footer/Signature/Copyright",
        name: "Copyright",
        
    }
]).then(function(answers){

    console.log(answers);

})