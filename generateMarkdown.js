// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.name}
  [![License: ${encodeURIComponent(data.license)}](https://img.shields.io/badge/License-${encodeURIComponent(data.license)}-yellow.svg)](https://opensource.org/licenses/${encodeURIComponent(data.license)})
  
## Table of contents
- [Description](#description-of-project)
- [Installation](#installation)
- [Application Usage](#application-usage)
- [Contribution Guidelines](#contribution-guidelines)
- [Test Instructions](#test-instructions)
- [Questions](#Questions)
- [License](#license)

## Description of project
${data.description}


## Installation
${data.installation}

## Application Usage
${data.usage}

## Contribution Guidelines
${data.contribution}

## Test Instructions
${data.test}

## Questions
If you need to contact me or have any additional questions about this application, my GitHub username is https://github.com/${data.githubUsername} and my Email is ${data.userEmail}.

## License
${data.license}

`;
}

module.exports = generateMarkdown;
