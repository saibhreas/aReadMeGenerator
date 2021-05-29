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
  type: 'list',
  name: 'lic',
  message: 'What liscence are you using?',
  choices: ['MIT','Academic Free License v3.0','Creative Commons Zero v1.0 Universal','Eclipse Public License 2.0', 'Open Software License 3.0',"None"]
 },
 {
  type: 'input',
  name: 'tech',
  message: 'What technologies used?',
 },
 {
   type: 'input',
   name: 'purpose',
   message: 'what is the purpose/task?',
 },
 {
   type:'input',
   name:'useage',
   message:'How to use',
 },
 {
   type:'input',
   name:'url',
   message:'Enter the link for deployed site',
 },
 {
  type: 'input',
  name: 'image',
  message: 'Add an image using the syntax:![Image].(./relative.png)',
 },
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
    writeToFile('README.md', generateMarkdown( { ...response } ) )
  })
}

init();
