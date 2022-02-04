const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const createTeam 
const path
const fs
let teamArray = [];


function init() {
    function createManager() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the team manager?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the manager employee id?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the email of the team manager?'
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
        createTeam();
    })
    
    }
    function createTeam() {
        inquirer.prompt([
            {
            type: 'list',
            name: 'options',
            message: 'What would you like to do next?',
            choices: ['Create Engineer', 'Create Intern', 'Done']
            }

        ])
        .then(answer => {
            if (answer.options === 'Create Engineer'){
                createEngineer();
            }   
            if (answer.options === 'Create Intern'){
                console.log('creating engineer')
            } 
            if (answer.options === 'Done'){
                console.log('creating engineer')
            } 
        })
    }

    function createEngineer() {
        console.log('good job')
    }

    function createIntern() {

    }

    function done() {
        // write file myTeam.html
        // research writeToFile
        // pass template into writeToFile
    }






    createManager();
};

init();