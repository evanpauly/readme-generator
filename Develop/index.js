const fs = require('fs');
const inquirer = require('inquirer');
const generateTemplate = require('./src/markdown-template')
const { writeFile } = require('./utils/generate-markdown')

const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter the title of your project');
                    return false;
                }
            }
        }, 
        {
            type: 'input',
            name: 'description',
            message: 'Give a brief description of your project. (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter the description of your project');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide installation instructions (Required)',
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log('Please enter the title of your project');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide usage instructions (Required)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please enter usage instructions');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'licenseOptions',
            message: 'Please choose a license',
            choices: ['MIT', 'GPLv2', 'Apache', 'Other', 'None']
        },
        {
            type: 'input',
            name: 'license',
            message: 'Provide license information (Required)',
            validate: licenseInput => {
                if (licenseInput) {
                    return true;
                } else {
                    console.log('Please provide license information');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmContribution',
            message: 'Would you like to provide contribution instructions?',
            default: true
        },
        {
            type: 'input',
            name: 'Contribution',
            message: 'Provide contribution instructions:',
            when: ({ confirmContribution }) => confirmContribution
        },
        {
            type: 'input',
            name: 'test',
            message: 'Provide testing instructions (Required)',
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log('Please provide testing instructions');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'questions',
            message: 'How can people reach you with questions and what is the best way to reach you? (Required)',
            validate: questionsInput => {
                if (questionsInput) {
                    return true;
                } else {
                    console.log('Please provide information for questions');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your github username?',
            validate: questionsInput => {
                if (questionsInput) {
                    return true;
                } else {
                    console.log('Please provide your github username');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: questionsInput => {
                if (questionsInput) {
                    return true;
                } else {
                    console.log('Please provide your email address');
                    return false;
                }
            }
        }
    ]);
};

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.log(err);
        }

        console.log("README.md has been created.")
    })
}

questions()
    .then( pageData => {
        return generateTemplate(pageData);
    })
    .then(pageMarkdown => {
        return writeFile(pageMarkdown);
    })
    .catch(err => {
        console.log(err);
    });