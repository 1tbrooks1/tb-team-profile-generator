// modules
const fs = require("fs");
const inquirer = require("inquirer");

// employee objects
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// link to create page
const createTeam = require('./src/template.js');

// array for team members
let team = [];

// start of the app
function init() {
  // asks questions of manager with validation 
  const createManager = () => {
    console.log(`
    ==================
      Create Manager 
    ==================  
    `)
    return inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is the name of the team Manager?",
          validate: nameInput => {
            if (nameInput.length > 0 && isNaN(nameInput)) {
              return true;
            } else {
              console.log(' Please enter a valid name for the Manager.');
              return false;
            }
          }
        },
        {
          type: "input",
          name: "id",
          message: "What is the employee ID of the team Manager?",
          validate: id => {
            if(!isNaN(id)) {
              return true;
            } else {
              console.log(' Please enter a valid number for the ID of the Manager.');
              return false;
            }
          }
        },
        {
          type: "input",
          name: "email",
          message: "What is the email of the team Manager?",
          validate: email => {
             const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
            if (validEmail) {
              return true;
            } else {
              console.log(' Please enter a valid email address.');
              return false;
            }
          }
        },
        {
          type: "input",
          name: "office",
          message: "What is the office number?",
          validate: office => {
            if(!isNaN(office)) {
              return true;
            } else {
              console.log(' Please enter a valid number for the office number.');
              return false;
            }
          }
        },
      ])
      .then((managerAns) => {
        const { name, id, email, office } = managerAns;
        const manager = new Manager (name, id, email, office);
        team.push(manager);
        console.log('Manager successfully created!');
        addMembers();
      });
  }
  // gives user option to add another team member or build team
  const addMembers = () => {
    console.log(`
    ==============
      Add Member 
    ==============  
    `)
    return inquirer
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
// prompts user with questions for engineer
  const createEngineer = () => {
    console.log(`
    ===================
      Create Engineer 
    ===================
    `)
    return inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is the name of the Engineer?",
          validate: nameInput => {
            if (nameInput.length > 0 && isNaN(nameInput)) {
              return true;
            } else {
              console.log(' Please enter a name for the Engineer.');
              return false;
            }
          }
        },
        {
          type: "input",
          name: "id",
          message: "What is the employee ID of the Engineer?",
          validate: id => {
            if(!isNaN(id)) {
              return true;
            } else {
              console.log(' Please enter a valid number for the ID of the Engineer.');
              return false;
            }
          }
        },
        {
          type: "input",
          name: "email",
          message: "What is the email of the Engineer?",
          validate: email => {
            const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
           if (validEmail) {
             return true;
           } else {
             console.log(' Please enter a valid email address.');
             return false;
           }
         }
        },
        {
          type: "input",
          name: "gitHub",
          message: "What is the GitHub username of the Engineer?",
          validate: gitHub => {
            if(gitHub.length > 0) {
              return true;
            } else {
              console.log(' Please enter valid GitHub username.')
              return false;
            }
          }
        },
      ])
      .then((engineerAns) => {
        const { name, id, email, gitHub} = engineerAns
        const engineer = new Engineer(name, id, email, gitHub);
        team.push(engineer);
        console.log('Engineer successfully created!');
        addMembers();
      });
  }
// prompts user with question for Intern
  const createIntern = () => {
    console.log(`
    =================
      Create Intern 
    =================  
    `)
    return inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is the name of the Intern?",
          validate: nameInput => {
            if (nameInput.length > 0 && isNaN(nameInput)) {
              return true;
            } else {
              console.log(' Please enter a name for the Intern.');
              return false;
            }
          }
        },
        {
          type: "input",
          name: "id",
          message: "What is the employee ID of the Intern?",
          validate: id => {
            if(!isNaN(id)) {
              return true;
            } else {
              console.log(' Please enter a valid number for the ID of the Engineer.');
              return false;
            }
          }
        },
        {
          type: "input",
          name: "email",
          message: "What is the email of the Intern?",
          validate: email => {
            const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
           if (validEmail) {
             return true;
           } else {
             console.log(' Please enter a valid email address.');
             return false;
           }
         }
        },
        {
          type: "input",
          name: "school",
          message: "What is the school of the Intern?",
          validate: schoolInput => {
            if (schoolInput.length > 0 && isNaN(schoolInput)) {
              return true;
            } else {
              console.log(' Please enter a valid school for the Intern.');
              return false;
            }
          }
        },
      ])
      .then((internAns) => {
        const { name, id, email, school } = internAns
        const intern = new Intern(name, id, email, school)
        team.push(intern);
        console.log('Intern successfully created!');
        addMembers();
      });
  }
// generates HTML page with input from user
  function buildTeam() {
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
    
    

