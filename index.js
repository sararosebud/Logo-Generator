const inquirer = require('inquirer');


const fs = require('fs');
const path = require('path');
const shapes = require('./lib/shapes')

const userShapeChoices = [
    "Circle",
    "Triangle",
    "Square",
       
  ];

  const logoQuestion = [
    {
        type: 'input', 
        name: 'letters', 
        message: 'Enter three letters for your Logo'
    },
    {
        type: 'list', 
        name: 'shapeOfLogo', 
        message: 'What Shape Would you like your logo to be?',
        choices: userShapeChoices,
    },
  ];

function init() {
    inquirer.prompt(logoQuestion)
    .then((answers) => {
        console.log(answers);
        
    })
}
init();