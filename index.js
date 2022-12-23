const inquirer = require('inquirer');
const fs = require('fs');
const pageGenerator = require('./generateMarkdown.js');

const userInfo = () => {
return inquirer
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
	},
	{
		type: 'input',
		message: 'please choose a license',
		name: 'license',
		choices: ['MIT', 'ISC', 'Mozilla Public License 2.0'],
		default: 'MIT'
	},
	{
	type: 'input',
      message: 'What is your GitHub username?',
      name: 'githubUsername',
	  validate: input => {
		if (input) {
			return true;
		} else {
			console.log('please input your GitHub username');
			return false;
		}
	  }
    },
	{
		type: 'input',
      message: 'What is your email?',
      name: 'userEmail',
	  validate: input => {
		if (input) {
			return true;
		} else {
			console.log('please input your Email');
			return false;
		}
	  }
    },
])
};

const appendFile = data => {
	fs.appendFile('ProjREADME.md', data, err => {
		if (err) {
			console.log(err);
			return;
		}else {
			console.log('Created ReadMe')
		}
	})
};

userInfo()
.then(userInput => {
	return pageGenerator(userInput);
})
.then(data => {
	return appendFile(data);
});