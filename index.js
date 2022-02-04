const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
// const createTeam;

let teamArray = [];


function init() {
    function createManager() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the team Manager?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the employee ID of the team Manager?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the email of the team Manager?'
            },
            {
                type: 'input',
                name: 'office',
                message: 'What is the office number?'
            }

    ])
    .then(answers => {
        let manager = new Manager(answers.name, answers.id, answers.email, answers.office);
        teamArray.push(manager);
        console.log(teamArray)
        addMembers();
    })
    
    }
    function addMembers() {
        inquirer.prompt([
            {
            type: 'list',
            name: 'options',
            message: 'What would you like to do next?',
            choices: ['Create Engineer', 'Create Intern', 'Build Team']
            }

        ])
        .then(answer => {
            if (answer.options === 'Create Engineer'){
                createEngineer();
            }   
            if (answer.options === 'Create Intern'){
                createIntern();
            } 
            if (answer.options === 'Build Team'){
                buildTeam();
            } 
        })
    }

    function createEngineer() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the Engineer?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the employee ID of the Engineer?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the email of the Engineer?'
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is the GitHub username of the Engineer?'
            }
        ])
        .then(engineerInfo => {
            let engineer = new Engineer(engineerInfo.name, engineerInfo.id,
                engineerInfo.email, engineerInfo.github);
            teamArray.push(engineer);
            addMembers();   
        })
    }

    function createIntern() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the Intern?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the employee ID of the Intern?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the email of the Intern?'
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is the school of the Intern?'
            }
        ])
        .then(internInfo => {
            let intern = new Intern (internInfo.name, internInfo.id,
                internInfo.email, internInfo.github);
            teamArray.push(intern);
            addMembers();   
        })
    }

    function buildTeam() {
        // write file myTeam.html
        // research writeToFile
        // pass template into writeToFile
        console.log(`
        =========================================
        you did enough go eat some ice cream fatty
        =========================================
        `
        )
    }






    createManager();
};

init();