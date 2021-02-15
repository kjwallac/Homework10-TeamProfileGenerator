const inquirer = require("inquirer");
const fs = require("fs");

async function run() {
  const data = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Enter employee name:",
    },
    {
      type: "list",
      name: "role",
      message: "What is this employee's role?",
      choices: ["Engineer", "Manager", "Intern"],
    },
    {
      type: "input",
      name: "email",
      message: "Enter employee's email address:",
    },
  ]);

  const filename = `${data.name.toLowerCase().split(" ").join("")}.json`;

  fs.writeFileSync(filename, JSON.stringify(data, null, "\t"));
}

run();
