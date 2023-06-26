// GIVEN a command-line application that accepts user input
// WHEN I am prompted for text
// THEN I can enter up to three characters
// logosvg & package json

const fs = require('fs')
const inquirer = require('inquirer')
const { Circle, Triangle, Square } = require('./lib/shapes.js')

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'What text would you like to add to your logo?'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color would you like your text to be?'
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What shape color would you like to add to your logo?'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like your logo to be?',
        choices: ['circle', 'square', 'triangle']
    }
]

inquirer.prompt(questions)
.then((response)=> {
   let shape;

   switch (response.shape) {
         case 'circle':
            shape = new Circle(response.shapeColor, response.text, response.textColor)
            break;
        case 'square':
            shape = new Square(response.shapeColor, response.text, response.textColor)
            break;
        case 'triangle':
            shape = new Triangle(response.shapeColor, response.text, response.textColor)
            break;
   }

   fs.writeFile('./dist/logo.svg', shape.render(), (err) => {
         if (err) throw err;
         console.log('The file has been saved!');
   })


})


