// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.name}
  
## Table of contents
- [Description](#${data.description})
- [Installation](#${installation})
- [Application Usage](#${usage})
- [Contribution Guidelines](#${contribution})
- [Test Instructions](#${test})

## Description of project
Improved the Horiseon website to be more accessible to users.


## Visuals
![search engine optimization image](assets/images/_C__Users_Tanner_bootcamp_challenges_seo-refactor_index.html.png) 

`;
}

module.exports = generateMarkdown;
