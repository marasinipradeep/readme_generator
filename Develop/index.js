const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile)

// array of questions for user
const questions = [

    {
        type: "input",
        message: "👤 What is the project name:",
        name: "title"
    },
    {
        type: "input",
        message: "Write description about your project:",
        name: "descriptions"
    },

    {
        type: "input",
        message: "Enter this command it will install all the dependencies at once:",
        name: "installations"
    },

    {
        type: "input",
        message: "Usage of project?",
        name: "usageDetails"
    },

    {
        type: "list",
        message: "Select one of the licene to use from following list?",
        name: "license",
        choices: [
            "MIT",
            "ISC",
            "GPL"
        ]
    },

    {
        type: "input",
        message: "How can people contribute?",
        name: "contribute"
    },

    {
        type: "input",
        message: "All commits that fix bugs or add features need a test:",
        name: "tests"
    },
    
    {
        type: "input",
        message: "👤 Your github username?",
        name: "userName"
    },
    {
        type: "input",
        message: "👤 Your email address?",
        name: "email"
    }

];


// function to initialize program
async function init() {
    try {
        const answer = await inquirer.prompt(questions)
        let markdowndata = generateMarkdown(answer)
        await writeFileAsync("README.md", markdowndata)
        console.log("SUccessfully created Reademe.md file")

    } catch (err) {
        console.log(err)
    }
}

// function call to initialize program
init();
