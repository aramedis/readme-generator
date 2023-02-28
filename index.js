import fs from "fs";
import inquirer from "inquirer";
import path from "path";
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
inquirer
  .prompt([
    {
        type: 'input',
        name: 'title',
        message: 'Title of the project',
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Description of the project',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation instructions',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How to use',
    },
    {
        type: 'input',
        name: 'license',
        message: 'Applicable licenses',
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Contributors',
    },
    {
        type: 'input',
        name: 'test',
        message: 'How to test',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Question section',
    },
  ])
  .then((response) => {
    console.log(response);
    
    const HTMLTemplate = generateHTML(response);

    fs.writeFile(`${response.name}.html`, HTMLTemplate, (error) =>
      error ? console.error(error) : console.log(`Success!`)
    );
  });

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
