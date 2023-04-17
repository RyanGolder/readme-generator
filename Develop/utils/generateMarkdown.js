// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Table of contents
### [Description](#description)
### [Installation](#installation)
### [Usage](#usage)
### [Contribution guidelines](#contribution-guidelines)
### [Tests](#tests)
### [Questions](#questions)

## Description {#description}
${data.description}

## Installation {#installation}
${data.installation}

## Usage {#usage}
${data.usage}

## Contribution guidelines {#contribution-guidelines}
${data.contributing}

## Tests {#tests}
${data.tests}

## Questions {#questions}
### Please direct your questions to our development team using the below contact details.
### Username: 
https://github.com/${data.username}

### Email:
${data.email}

`;
}

module.exports = generateMarkdown;
