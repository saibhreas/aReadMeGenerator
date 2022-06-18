// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require ('inquirer');
const path = require('path');
const generateMarkdown =  require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [{
  type: 'input',
  name: 'title',
  message: 'What the title of your project?',
 },
 {
   type: 'input',
   name: 'name',
   message: "Author's name?",
 },
 {
   type: 'input',
   name: 'github',
   message: 'Enter your Github Username',
 },
 {
   type: 'input',
   name: 'email',
   message: 'Enter your email address',
 },
 {
   type: 'input',
   name: 'purpose',
   message:'Why this app/purpose?'
 },
 {
  type: 'input',
  name: 'description',
  message: 'Describe program/app?',
 },
 {
  type: 'list',
  name: 'license',
  message: 'What license are you using?',
  choices: ['MIT','Apache','Eclipse','Mozilla'],
 },
 {
  type: 'input',
  name: 'run',
  message: 'How to deploy?',
 },
 {
  type:'input',
  name:'usage',
  message:'How to use',
  },
 {
  type: 'input',
  name: 'tech',
  message: 'What technologies used?',
 },
 {
  type: 'input',
  name: 'imgs',
  message: 'Any images to add?',
 },
 {
   type: 'input',
   name: 'links',
   message: 'Add any links here'
 }
];

// TODO: Create a function to write README file with user choices
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data)
};

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then((response) =>{
    console.log('Your readME is being generated');
    writeToFile('GenREADME.md', generateMarkdown( { ...response } ) )
  })
}

init();
