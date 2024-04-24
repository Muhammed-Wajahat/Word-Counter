#! /usr/bin/env node
import inquirer from "inquirer";
console.log("Wellcome to Word Counter");
let answer = await inquirer.prompt([{
        name: "sentances",
        type: 'input',
        message: "Enter a Sentanses for find a word:"
    }]);
let word = answer.sentances.split(" ");
console.log(`your Sentanses word is: ${word.length}`);
