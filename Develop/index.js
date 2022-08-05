const fs = require('fs');
const inquirer = require('inquirer');

const promptUser = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'what is the title of the project?',
    },    
    {
        type: 'input',
        name: 'project description',
        message: 'description of project?',
    },
    ])
    
    
}

promptUser()