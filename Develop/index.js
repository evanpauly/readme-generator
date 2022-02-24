// TODO: Include packages needed for this application
const inquirer = require('inquirer');


// TODO: Create an array of questions for user input
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
            name: 'table of contents',
            message: 'Provide a Table of Contents (Required)',
            validate: tableInput => {
                if (tableInput) {
                    return true;
                } else {
                    console.log('Please enter a table of contents');
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
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

questions();