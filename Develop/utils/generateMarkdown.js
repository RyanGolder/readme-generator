// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  }

  let badgeText;
  let badgeColor;

  switch (license.toLowerCase()) {
    case "apache license 2.0":
      badgeText = "Apache-2.0";
      badgeColor = "blue";
      break;
    case "gnu gplv3":
      badgeText = "GPLv3";
      badgeColor = "green";
      break;
    case "mit license":
      badgeText = "MIT";
      badgeColor = "yellow";
      break;
    default:
      badgeText = license;
      badgeColor = "lightgrey";
      break;
  }

  return `[![License: ${badgeText}](https://img.shields.io/badge/License-${badgeText}-${badgeColor}.svg)](https://opensource.org/licenses/${badgeText})`;
};



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return "";
  }

  switch (license.toLowerCase()) {
    case "apache license 2.0":
      return "https://opensource.org/licenses/Apache-2.0";
    case "gnu gplv3":
      return "https://www.gnu.org/licenses/gpl-3.0";
    case "mit license":
      return "https://opensource.org/licenses/MIT";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
}
return `
## License

This project is licensed under the ${license} - see the [LICENSE.md](${renderLicenseLink(license)}) file for details.
`;
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
### Please direct your questions to our development team using the below contact details.
### Username: 
https://github.com/${data.username}

### Email:
${data.email}

${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;
