const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your projects title?',
      name: 'name',
	  validate: input => {
		if (input) {
			return true;
		} else {
			console.log('please input your projects title');
			return false;
		}
	  }
    },
    {
      type: 'input',
      message: 'Please input a description.',
      name: 'description',
	  validate: input => {
		if (input) {
			return true;
		} else {
			console.log('please input a description');
			return false;
		}
	  }
    },
    {
      type: 'input',
      message: 'What are your installation instructions?',
      name: 'installation',
	  validate: input => {
		if (input) {
			return true;
		} else {
			console.log('please input installation instructions');
			return false;
		}
	  }
    },
	{
		type: 'input',
		message: 'What is your application used for?',
		name: 'usage',
		validate: input => {
			if (input) {
				return true;
			} else {
				console.log('please input the application usage');
				return false;
			}
		  }
	},
	{
		type: 'input',
		message: 'What are your contribution guidelines?',
		name: 'contribution',
		validate: input => {
			if (input) {
				return true;
			} else {
				console.log('please input your contribution guidelines');
				return false;
			}
		  }
	},
	{
		type: 'input',
		message: 'What are your test instructions?',
		name: 'test',
		validate: input => {
			if (input) {
				return true;
			} else {
				console.log('please input your test instructions');
				return false;
			}
		  }
	}
])
.then((response) =>
fs.appendFile('READMEtest.me', `${JSON.stringify(response)}\n`, (err) => err ? console.log('error') : console.log('submitted'))
);