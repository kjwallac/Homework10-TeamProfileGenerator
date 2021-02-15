const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
      {
          type: 'input',
          name: 'name',
          message: 'Enter employee name:',
      },
      {
          type: 'list',
          name: 'role',
          message: "What is this employee's role?",
          choices: ['Engineer', 'Manager', 'Intern'],
      },
      {
          type: 'input',
          name: 'email',
          message: "Enter employee's email address:",
      },
    ])
    .then((data) => {
        const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;
    
        fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
          err ? console.log(err) : console.log('Employee added!')
        );
      });