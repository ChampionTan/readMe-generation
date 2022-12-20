const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your projects title?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'Please input a description.',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What are your installation instructions?',
      name: 'installation',
    },
	{
		type: 'input',
		message: 'What is your application used for?',
		name: 'usage',
	}
])
.then((response) =>
fs.appendFile('info.txt', `${JSON.stringify(response)}\n`, (err) => err ? console.log('error') : console.log('submitted'))
);