const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'index.html');
const createTeam = require('./src/template.js');

let teamArray = [];

function init() {
  function createManager() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "managerName",
          message: "What is the name of the team Manager?",
        },
        {
          type: "input",
          name: "managerId",
          message: "What is the employee ID of the team Manager?",
        },
        {
          type: "input",
          name: "managerEmail",
          message: "What is the email of the team Manager?",
        },
        {
          type: "input",
          name: "managerOffice",
          message: "What is the office number?",
        },
      ])
      .then((answers) => {
        let manager = new Manager(
          answers.managerName,
          answers.managerId,
          answers.managerEmail,
          answers.managerOffice
        );
        teamArray.push(manager);
        console.log(teamArray);
        addMembers();
      });
  }
  function addMembers() {
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

  function createEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "engineerName",
          message: "What is the name of the Engineer?",
        },
        {
          type: "input",
          name: "engineerId",
          message: "What is the employee ID of the Engineer?",
        },
        {
          type: "input",
          name: "engineerEmail",
          message: "What is the email of the Engineer?",
        },
        {
          type: "input",
          name: "engineerGithub",
          message: "What is the GitHub username of the Engineer?",
        },
      ])
      .then((answers) => {
        let engineer = new Engineer(
          answers.engineerName,
          answers.engineerId,
          answers.engineerEmail,
          answers.engineerGithub
        );
        teamArray.push(engineer);
        addMembers();
      });
  }

  function createIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "internName",
          message: "What is the name of the Intern?",
        },
        {
          type: "input",
          name: "internId",
          message: "What is the employee ID of the Intern?",
        },
        {
          type: "input",
          name: "internEmail",
          message: "What is the email of the Intern?",
        },
        {
          type: "input",
          name: "internSchool",
          message: "What is the school of the Intern?",
        },
      ])
      .then((answers) => {
        let intern = new Intern(
          answers.internName,
          answers.internId,
          answers.internEmail,
          answers.internSchool
        );
        teamArray.push(intern);
        addMembers();
      });
  }

  function buildTeam() {
      console.log('Your team was successfully created!');
      fs.writeFileSync(distPath, createTeam(teamArray));
  }

  createManager();
}

init();

