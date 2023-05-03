const inquirer = require('inquirer');


const fs = require('fs');
const path = require('path');
const {Circle, Triangle, Square} = require('./lib/shapes')



  const logoQuestions = [
    {
        type: 'input', 
        name: 'letters', 
        message: 'Enter up to three letters for your Logo',
        validate: textInput =>{
            if (textInput && textInput.length <= 3){
                return true
            } else {
                console.log("Please enter three max letters.")
                return false
            };}
    },
    {
        type: 'list', 
        name: 'shapeOfLogo', 
        message: 'What Shape Would you like your logo to be?',
        choices: [
            "Circle",
            "Triangle",
            "Square",   
          ],
        default: 'square',
    },
    {
        type: 'input', 
        name: 'textColor', 
        message: 'Enter a color or hexadecimal number for the color of the text on your logo',
        default: 'white',
    },
    {
        type: 'input', 
        name: 'backgroundColor', 
        message: 'Enter a color or hexadecimal number for the color of the background of your Logo',
        default: "black",
    },


  ];

function init() {
    inquirer.prompt(logoQuestions)
    .then((answers) => {
        console.log(answers);
        let logoShape;
        if(answers.shapeOfLogo === 'Circle') {
            logoShape = new Circle();

        } else if(answers.shapeOfLogo === 'Triangle') {
            logoShape = new Triangle();

        } else if(answers.shapeOfLogo === 'Square') {
            logoShape = new Square();
        }
        logoShape.setColor(answers.backgroundColor)
        logoShape.setText(answers.letters, answers.textColor)
       
       
        
       return fs.writeFile('./examples/logo.svg', logoShape.render(), (error)=>{
        if(error) {
            console.error(error)
        }

       })
        
    })

}



init();