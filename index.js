// Included packages required for this file.
const fs = require("fs");
const inquirer = require("inquirer");
const generatorMarkdown = require("./utils/generateMarkdown.js");

// Array of questions for user input.
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please name your Project.",
    },
    {
        type: "input",
        name: "description",
        message: "Please describe the purpose and functionality of this project.",
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide a step-by-step description for any installations required.",
    },
    {
        type: "input",
        name: "usage",
        message: "State the languages or technologies associated with this project.",
    },
    {
        type: "input",
        name: "contributors",
        message: "Please list any contributors. (Use GitHub usernames)",
    },
    {
        type: "input",
        name: "test",
        message: "Provide walkthrough of required tests if applicable.",
    },
    {
        type: "list",
        name: "license",
        message: "Which license would you like to use for this project?",
        choices: ["MIT License", "Apache License 2.0", "GNU General Puplic License v3.0", "Mozilla Public License 2.0", "None"],
    },
    {
        type: "input",
        name: "link",
        message: "Please provide a URL where a user can access your deployed application."
    },
    {
        type: "input",
        name: "email",
        message: "Please, enter your email address:",
    },
];

// Function to write the README file.
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Congratulations, the (Generated)README.md file has beeen successfully created!");
    });
}

// Function to initialize the app.
async function init() {
    console.log("Starting the (Generated)README.md generator...");

    // Prompt the user for answers.
    const answers = await inquirer.prompt(questions);

    // Generate the README content.
    let readmeContent = generatorMarkdown(answers);

        // Write the README file.
        writeToFile("(Generated)README.md", readmeContent);
}

// Call the init function to start the app.
init();
