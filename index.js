// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");
console.log(generateMarkdown);

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of the project?",
  },
  {
    type: "input",
    name: "description",
    message: "Give a description of the project.",
  },
  {
    type: "input",
    name: "install",
    message: "Provide installation instruction for the project.",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide usage information for the project.",
  },
  {
    type: "input",
    name: "contribute",
    message: "Provide contribution guidelines for the project.",
  },
  {
    type: "input",
    name: "test",
    message: "Provide test instructions for the provide.",
  },
  {
    type: "checkbox",
    name: "license",
    message: "Please select any licenses.",
    choices: ["inquirer", "gitHub", "none"],
  },
  {
    type: "input",
    name: "gitHub",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Successfuly created READme!")
  );
}

// TODO: Create a function to initialize app
const init = () => {
  inquirer
    .prompt(questions)
    .then((answers) => writeToFile("READme2.md", generateMarkdown(answers)))
    .then(() => console.log("Successfully written to READme"))
    .catch((err) => console.error(err));
};
// Function call to initialize app
init();
