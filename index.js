// Ex:1

// console.log("Joy")

// Ex: 2

var readlineSync = require('readline-sync')
var name = readlineSync.question("What is your name?\n")
// console.log(name)

// Ex: 3

var welcomeMessage = "Hi! " + name + ", Welcome to JavaScript!"
console.log(welcomeMessage)

// Ex: 4
// Ex: 5
// Ex: 6

var score = 0
var age = readlineSync.question("Enter your age to check if it is greater than 18 or not.\n")
if (age >= 18){
    console.log("Yes! You are Correct. Your age is " + age + " which is greater than 18.\n")
    score = score + 1
}
else{
    console.log("No! You are wrong. Your age is " + age + " which is less than 18.\n")
    score = score - 1
}

// Ex: 7

console.log("The score is " + score)

// Ex: 8

var newQues = readlineSync.question("Do you have an imposter syndrome?\n")
if (newQues === 'yes'){
    score = score + 1
    console.log("Great!!! So you are a pro coder.\nYour score now is: " + score + ".\n")
}
else if (newQues === 'no'){
    score = score - 1
    console.log("Ohh!!! So you are a noob.\nYour score now is: " + score + ".\n")
}
else{
    score = 0
    console.log("Invalid input\n Your score has been reset to " + score+ ".\n")
}