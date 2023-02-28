import fs from "fs";
import inquirer from "inquirer";
import generateMarkdown from "./utils/generateMarkdown.js";

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
        name: 'description',
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
        message: 'Contact for questions',
    },
  ])
  .then((response) => {
    console.log(response);
    
    const mdTemplate = generateMarkdown(response);

    fs.writeFile(`${response.title}.md`, mdTemplate, (error) =>
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
