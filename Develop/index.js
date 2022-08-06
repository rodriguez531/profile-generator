const { error } = require('console');
const fs = require('fs');
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown')
const promptUser = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'what is the title of the project?',
    },    
    {
        type: 'input',
        name: 'description',
        message: 'description of project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'what are the installation instructions',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'what is the usage information',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'are there any contributers to the application?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'what are the test instructions?',
    },
    {
        type: 'checkbox',
        name: 'license',
        choices: ['MIT', 'APACHE', 'No license']
    
    },
    {
        type: 'input',
        name: 'github',
        message: 'what is your github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'what is your email?',
    },
    ])
    .then(userData => {
        return createFile(userData)
    }); 
};

const createFile = (userData) => {
    return new Promise((resolve, reject) => {
        fs.writeFile('NewREADME.md', markdown(userData), err => {
            if (err) throw err
        })   
    })
    
}

promptUser()