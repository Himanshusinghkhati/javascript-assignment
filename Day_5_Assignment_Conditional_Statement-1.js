//Problem 1:
//Write a JavaScript program that compares two variables and prints the larger one.
var num1 = 100;
var num2 = 200;
if(num1 > num2){
    console.log("Number 1 is larger");
}else if(num2 > num1){
    console.log("Number 2 is larger");
}else {
    console.log("Number is equal");
}

//Problem 2:
//Write a JavaScript program that assigns a value to a variable representing age.If the age is less than 18, print "You are minor"; otherwise, print "You are an adult".
var age = "17";
if(age < 18) {
    console.log("You are minor");
}else{
    console.log("You are adult"); 
}

//Problem 3:
//Develop a program in JavaScript that assigns a value to a variable and checks whether it is divisible by 5, printing "Divisible by 5" or "Not divisible by 5" accordingly.
var num = 16;
if(num % 5 == 0){
    console.log("Divisible by 5");
}else{
    console.log("Not Divisible by 5");
}

//Problem 4:
//Develop a program in JavaScript that assigns a value to a variable representing a number and checks whether it is even or odd.
var evenOrOdd = 12;
if(evenOrOdd % 2 === 0) {
    console.log("Number is even");
}else{
    console.log("Number is odd");
}

//Problem 5:
//Write a JavaScript program that assigns a value to a variable representing a number and checks whether it is positive. If it is positive, print "Positive"; otherwise, print "Not positive".
var positiveNegativeNo = -1;
if(positiveNegativeNo > 0) {
     console.log("Positive");
}else{
    console.log("Not positive")
}