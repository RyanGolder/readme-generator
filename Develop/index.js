// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What do you want the title of your Readme file to be?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your application.',
    },
    {
        type: 'input',
        name: 'installation',
        message:'Please provide installation instructions.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide a guideline on how to use your application.',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please provide your contribution guidelines.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide test instructions.',
    },
    {
        type: 'input',
        name: 'username',
        message: 'Please provide your GitHub username.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address for users to contact you for questions.',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName),data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        const markdownPageContent = generateMarkdown(answers);
        writeToFile("README.EXAMPLE.md", markdownPageContent)
    })
}

// Function call to initialize app
init();
