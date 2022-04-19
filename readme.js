function generateBadgeUrl(License){
    // how to generate a badge for license (professional visual)
    return `https://img.shields.io/badge/License-${encodeURIComponent(License)}-blue`;
}

function generateReadme(answers){
    // main logic to generate readme

return `

# ${answers.Title}
![License](${generateBadgeUrl(answers.License)})

## Description
${answers.Description}

## Table of Contents (optional)
${answers.Contents}

## Installation
${answers.Installation}

## Usage
${answers.Usage}

## License
${answers.License}

## Tests
${answers.Tests}

## Contributions
${answers.Contributions}

## Questions
${answers.Questions}

## Copyright
${answers.Copyright}
`
}

module.exports = {generateReadme};
