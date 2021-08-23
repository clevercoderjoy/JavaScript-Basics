// // Ex:1

// console.log("Joy")

// // Ex: 2

var readlineSync = require('readline-sync')
// var name = readlineSync.question("What is your name?\n")
// console.log(name)

// // Ex: 3

// var welcomeMessage = "Hi! " + name + ", Welcome to JavaScript!"
// console.log(welcomeMessage)

// // Ex: 4
// // Ex: 5
// // Ex: 6

// var score = 0
// var age = readlineSync.question("Enter your age to check if it is greater than 18 or not.\n")
// if (age >= 18){
//     console.log("Yes! You are Correct. Your age is " + age + " which is greater than 18.\n")
//     score = score + 1
// }
// else{
//     console.log("No! You are wrong. Your age is " + age + " which is less than 18.\n")
//     score = score - 1
// }

// console.log("The score is " + score)

// var newQues = readlineSync.question("Do you have an imposter syndrome?\n")
// if (newQues === 'yes'){
//     score = score + 1
//     console.log("Great!!! So you are a pro coder.\nYour score now is: " + score + ".\n")
// }
// else if (newQues === 'no'){
//     score = score - 1
//     console.log("Ohh!!! So you are a noob.\nYour score now is: " + score + ".\n")
// }
// else{
//     score = 0
//     console.log("Invalid input\n Your score has been reset to " + score+ ".\n")
// }

// // Ex: 7
// // functions

// // Syntax
// // function functionName(par1, par2){
// // processing
// //     return output
// // }

// function add(num1, num2){
//     var sum = num1 + num2
//     return sum
// }

// console.log("Enter two numbers to add them.\n")
// var num1 = Number(readlineSync.question())
// var num2 = Number(readlineSync.question())
// var result = add(num1, num2)
// console.log(result)

// // objects
// var marks = {
//     joy: 400,
//     deeksha: 200
// };
// console.log(marks.joy, marks.deeksha);
// console.log(marks);


// // Ex:1

// // console.log("Joy")


// // Ex: 2

var readlineSync = require('readline-sync')
// var name = readlineSync.question("What is your name?\n")
// console.log(name)


// // Ex: 3

// var welcomeMessage = "Hi! " + name + ", Welcome to JavaScript!"
// console.log(welcomeMessage)


// // Ex: 4
// // Ex: 5
// // Ex: 6

// var score = 0
// var age = readlineSync.question("Enter your age to check if it is greater than 18 or not.\n")
// if (age >= 18){
//     console.log("Yes! You are Correct. Your age is " + age + " which is greater than 18.\n")
//     score = score + 1
// }
// else{
//     console.log("No! You are wrong. Your age is " + age + " which is less than 18.\n")
//     score = score - 1
// }

// console.log("The score is " + score)

// var newQues = readlineSync.question("Do you have an imposter syndrome?\n")
// if (newQues === 'yes'){
//     score = score + 1
//     console.log("Great!!! So you are a pro coder.\nYour score now is: " + score + ".\n")
// }
// else if (newQues === 'no'){
//     score = score - 1
//     console.log("Ohh!!! So you are a noob.\nYour score now is: " + score + ".\n")
// }
// else{
//     score = 0
//     console.log("Invalid input\n Your score has been reset to " + score+ ".\n")
// }


// // Ex: 7
// // functions

// // Syntax
// // function functionName(par1, par2){
// //     processing
// //     return output
// // }

// function add(num1, num2){
//     var sum = num1 + num2
//     return sum
// }

// console.log("Enter two numbers to add them.\n")
// var num1 = Number(readlineSync.question())
// var num2 = Number(readlineSync.question())
// var result = add(num1, num2)
// console.log(result)

// // objects
// var marks = {
//     joy: 400,
//     deeksha: 200
// };
// console.log(marks.joy, marks.deeksha);
// console.log(marks);

// // alt for in js
// var arr = [15,16,18,14,12]
// arr.forEach(function(element){
//     console.log(element)
// })


// // Ex 8:

// var score = 0;
// function qna(ques, ans){
//     console.log(ques);
//     var userAns = readlineSync.question("Put your answer here.\n");
//     if (userAns === ans){
//         score += 1;
//         console.log("Correct! Your score is: ", score, "\n");    }
//     else{
//         score -= 1;
//         console.log("Wrong! Your score is: ", score, "\n");
//     }
// }
// ques1 = "what is your favourite game?"
// ans1 = "pokemon"
// ques2 = "What is your favourite pokemon?"
// ans2 = "charizard"
// ques3 = "What is it's favourite attack?"
// ans3 = "dragon claw"
// qna(ques1, ans1)
// qna(ques2, ans2)
// qna(ques3, ans3)


// // Ex: 9

// // for loop
// // for(initial condition; exit condition; step condition){
// //     processing
// // }

// var score = 0;
// function qna(ques, ans){
//     console.log(ques);
//     var userAns = readlineSync.question("Put your answer here.\n");
//     if (userAns === ans){
//         score += 1;
//         console.log("Correct! Your score is: ", score, "\n");    }
//     else{
//         score -= 1;
//         console.log("Wrong! Your score is: ", score, "\n");
//     }
// }
// for(let i = 1; i <= 5; i++){
//     var ques = readlineSync.question("Enter a question.\n")
//     var ans = readlineSync.question("Enter an answer for that question. \n")
//     qna(ques, ans)
// }

// star pattern
// for(let i = 1; i <= 5; i++){
//     var p = ''
//     for(let j = 1; j <= i; j++){
//         p += '*'
//     }
//     console.log(p)
// }

// // inverted star pattern
// for(let i = 5; i >= 1; i--){
//     p = ''
//     for(let j = i; j >= 1; j--){
//         p += '*'
//     }
//     console.log(p)
// }


// // Ex: 10, 11

// // Array

// // syntax:
// // var arrayName = [v1, v2, v3, ...];

// var arr = ['eggs', 'fish', 'parrot', 'potty', 'pig'];
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }

// // Ex: 12

// // objects

// var superman = {
//     name: 'chaddhi wala man',
//     power: 'super strenght',
//     speed: 'faster than the flash',
//     weekness: 'kryptonite'
// }

// var batman = {
//     name: 'batman',
//     power: 'this dude is rich',
//     speed: 'quick',
//     weekness: 'chicks'
// }

// console.log(superman.speed)
// console.log(batman.weekness)

// // Ex: 13


// var quesOne = {
//     ques: "what is your favourite game?",
//     ans: "Pokemon"
// }

// var quesTwo = {
//     ques: "What is your favourite pokemon?",
//     ans: "Charizard"
// }

// var quesThree = {
//     ques: "What is it's favourite attack?",
//     ans: "Dragon Claw"
// }
// console.log(quesOne.ques)
// console.log(quesOne.ans)
// console.log(quesTwo.ques)
// console.log(quesTwo.ans)
// console.log(quesThree.ques)
// console.log(quesThree.ans)
// var arr = [["superman", "red + blue"], ["batman", "black"], ["flash", "red + yellow"]]
// console.log(arr[0][0])
// for(let i = 0; i <= arr.length; i++){
//     console.log(arr[i])
// }
// arr.forEach(function(item, ind){
//     console.log(item, ind)
// })

// function hero(h){
//     console.log("Name : ", h.key);
//     console.log("Color : ", h.value, "\n");
// }
// var n = readlineSync.question("Enter the number of heros:\n")
// var h ={};
// for(let i = 1; i <= n; i++){
//     h.key = readlineSync.question("Hero name: ");
//     h.value = readlineSync.question("Color: ");
// }

// // Ex: 14, 15

// // end game

// var userName = readlineSync.question("What is your name?\n")
// console.log("Welcome", userName, "! to 'Do you know Joy?'")
// var score = 0

// function play(question, answer){
//     var userAnswer = readlineSync.question(question);
//     if (userAnswer === answer){
//         score += 1
//         console.log("Right! Your score is ", score,  ".\n")
//     }
//     else{
//         score -= 1
//         console.log("Wrong! Your score is ", score, ".\n")
//     }
//     console.log("-----------------------------")
// }

// var questions = [
//     {
//     ques: "Where do I live? ",
//     ans: "lucknow"
//     },
//     {
//     ques: "Who is my favourite hero? ",
//     ans: "deku"
//     },
//     {
//     ques: "Do I like Pokemon? ",
//     ans: "yes"
//     }
// ];

// for(let i = 0; i < questions.length; i++){
//     var currQues = questions[i]
//     play(currQues.ques, currQues.ans)
// }
// console.log("YAY!!!... Your final score is: ", score, ".")
