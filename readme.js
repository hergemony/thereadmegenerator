function generateBadge(license){
    return `https://img.shields.io/badge/License-${encodeURIComponent(license)}-blue`;
}

function generateReadme(answers){
    // main logic to generate readme
return `

# ${answers.title}

![License](${generateBadgeUrl(answers.license)})

${answers.description}


## Description

Provide a short description explaining the what, why and how of your project.
Use the following questions as a guide:

- What was your motivation?
- Why did you build this project?
- What problem does it solve?
- What did you learn?

${answers.tableofcontents}

## Table of Contents (optional)

If your README is long, add a table of contents to make it easy for users to find what they need

${answers.installationinstructions}
## Installation
What are the steps required to install your project? 
Provide a step-by-step description of how to get the development environment up and running.


${answers.usage}
## Usage

${answers.description}
## License
The last section of a high-quality README file is the license. This lets other developers know what they can and 
cannot do with your project.

${answers.tests}
## Tests

${answers.screenshots}
## Screenshots

${answers.videodemo}
## Video Demo

${answers.acknoledgements}
## Acknowledgements 
List your collaborators, if any, with links to their GitHub profiles.
If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
If you used tutorials, include links to those here as well.


${answers.copyright}
## Copyright 

}
