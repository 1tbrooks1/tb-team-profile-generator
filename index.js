const fs = require("fs");
const inquirer = require("inquirer");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const createTeam = require('./src/template.js');

let team = [];

function init() {
  const createManager = () => {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is the name of the team Manager?",
        },
        {
          type: "input",
          name: "id",
          message: "What is the employee ID of the team Manager?",
        },
        {
          type: "input",
          name: "email",
          message: "What is the email of the team Manager?",
        },
        {
          type: "input",
          name: "office",
          message: "What is the office number?",
        },
      ])
      .then((managerAns) => {
        const { name, id, email, office } = managerAns;
        const manager = new Manager (name, id, email, office);
        team.push(manager);
        addMembers();
      });
  }
  const addMembers = () => {
    inquirer
      .prompt([
        {
          type: "list",
          name: "options",
          message: "What would you like to do next?",
          choices: ["Create Engineer", "Create Intern", "Build Team"],
        },
      ])
      .then((answer) => {
        if (answer.options === "Create Engineer") {
          createEngineer();
        }
        if (answer.options === "Create Intern") {
          createIntern();
        }
        if (answer.options === "Build Team") {
          buildTeam();
        }
      });
  }

  const createEngineer = () => {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is the name of the Engineer?",
        },
        {
          type: "input",
          name: "id",
          message: "What is the employee ID of the Engineer?",
        },
        {
          type: "input",
          name: "email",
          message: "What is the email of the Engineer?",
        },
        {
          type: "input",
          name: "github",
          message: "What is the GitHub username of the Engineer?",
        },
      ])
      .then((engineerAns) => {
        const { name, id, email, github} = engineerAns
        const engineer = new Engineer(name, id, email, github);
        team.push(engineer);
        addMembers();
      });
  }

  const createIntern = () => {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is the name of the Intern?",
        },
        {
          type: "input",
          name: "id",
          message: "What is the employee ID of the Intern?",
        },
        {
          type: "input",
          name: "email",
          message: "What is the email of the Intern?",
        },
        {
          type: "input",
          name: "school",
          message: "What is the school of the Intern?",
        },
      ])
      .then((internAns) => {
        const { name, id, email, school } = internAns
        const intern = new Intern(name, id, email, school)
        team.push(intern);
        addMembers();
      });
  }

  function buildTeam() {
      console.log(team);
      fs.writeFile('./dist/index.html', createTeam(team), err => {
          if (err) {
              console.log(err)
          } else {
            console.log('Your team was successfully created!');
          }
      });
  }

  createManager();

}

init();
    
    

