// Application PLAN:
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
        name: "Title",
    },
    {
        type: "input",
        message: "What is the description of your project?",
        name: "Description",

    },
    {
        type: "checkbox",
        message: "List your Table of Contents",
        choices: [
            "[Installation](##Installation)",
            "[Usage](##Usage)",
            "[Screenshot](#Screenshot)",
            "[Video](#Video)",
            "[License](#License)",
            "[Features](#Features)",
            "[Credits](#Credits)",
            "[Tests](#Tests)",
            "[Questions](#Questions)",
            "[Copyright](#Copyright)",
        ],
        name: "Contents",
    },
{
    type: "input",
    message: "What is your project installation process?",
    name: "Installation",
},
{
    type: "input",
    message: "What is your project usage?",
    name: "Usage",
},
{
    type: "input",
    message: "Include a Screenshot (Use the following format and link: ![alt text](assets/images/screenshot.png )",
    name: "Screenshot",
},
{
    type: "input",
    message: "Include a Video Demo (Use the following format and link: ![Alt text for your video](assets/images/Youtubescreenshotreadmegenerator.png)(https://youtu.be/xxGy6bumx08)",
    name: "Video",

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
        name: "License",
    },
    {
        type:"input",
        message: "Does your project have any special features?",
        name: "Features",
    },
    {
        type: "input",
        message: "What tests have been performed?",
        name: "Tests",
    },
    {
        type: "input",
        message: "List your contributors/collaborators/creators and provide links",
        name: "Credits",
    },
    {
        type: "input",
        message: "How will users contact you with questions?",
        name: "Questions",
    },
    {
        type: "input",
        message: "Insert Company Footer/Signature/Copyright",
        name: "Copyright",
    },
        


]).then(function(answers){

    console.log(answers);

    const readmeContent = readme.generateReadme(answers);
    
    //save the readme content to a README.md file
    
    fs.writeFileSync(__dirname + '/README.md', readmeContent, 'utf-8');

});

//finish working code 