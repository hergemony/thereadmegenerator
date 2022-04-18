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
const inquirer = require('inquirer');
const readme = require('./readme');
const fs = require('fs');


console.log(readme);

inquirer.prompt([
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "What is the description of your project?",
        name: "description",

    },
    {
        type: "input",
        message: "Create your Table of Contents",
        name: "contents",
    },
{
    type: "input",
    message: "Installation Instructions",
    name: "installation",
},
{
    type: "input",
    message: "Usage Information",
    name: "usage",
},
{
        type: "list",
        message: "What license is the application covered under?",
        choices: [
            "MIT",
            "Apache-2.0",
            "GPL 3.0",
            "BSD 2 Clause",
            "BSD 3 Clause",
            "BSD 4 Clause",
        ],
        name: "license",
    },
    {

        type: "input",
        message: "What tests have been performed?",
        name: "tests",
    },
    {
        type: "input",
        message: "Acknowledgements",
        name: "acknowledgements",
    },
    {
        type: "input",
        message: "Insert Company Footer/Signature/Copyright",
        name: "copyright",
    },
        


]).then(function(answers){

    console.log(answers);

    const readmeContent = readme.generateReadme(answers);
    
    //save the readme content to a README.md file
    
    fs.writeFileSync(__dirname + '/README.md', readmeContent, 'utf-8');

});

