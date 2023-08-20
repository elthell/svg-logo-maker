// add inquirer, fs, lib
const inquirer = require("inquirer");
const fs = require("fs");
const { generateSvg } = require("./lib/svg");

// user questions
const questions = [
  {
    type: "input",
    message:
      "What text would you like on your logo? (Enter up to three characters)",
    name: "text",
    // make sure text entry isn't more than three characters
    validate: (input) => {
      if (input.length <= 3) {
        return true;
      } else {
        console.log(`Please enter no more than three characters.`);
        return false;
      }
    },
  },
  {
    type: "input",
    message:
      "Choose the text color (Enter a color keyword OR a hexadecimal number)",
    name: "textColor",
  },
  {
    type: "list",
    message: "What shape would you like the logo to be?",
    choices: ["Circle", "Square", "Triangle"],
    name: "shape",
  },
  {
    type: "input",
    message:
      "Choose the shape's color (Enter a color keyword OR a hexadecimal number)",
    name: "shapeColor",
  },
];

// function to write to file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (error) => {
    if (error) {
      return console.log("Error : " + error);
    }
  });
}

// function to initialize
async function init() {
  try {
    // prompt questions + get answers
    const userInput = await inquirer.prompt(questions);
    console.log(userInput);

    // format asnwers for svg
    const userSvg = generateSvg(userInput);
    console.log(userSvg);

    // make svg file
    writeToFile("logo.svg", userSvg);
  } catch (error) {
    console.log("Error : " + error);
  }
}

// call init
init();
