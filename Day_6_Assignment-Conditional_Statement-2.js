//Problem 1
//Write code to check if a number is positive, negative, or zero.
var positiveNegativeNo = 0;
if(positiveNegativeNo > 0) {
   console.log("Number is Positive");
}else if(positiveNegativeNo < 0) {
    console.log("Number is Negative");
}else{
    console.log("Number is Zero");
}

//Write code that calculates the final grade (A, B, C, D, or F) for a student.
var score = 55;
if(score >= 90) {
      console.log("Grade A");
}else if(score >= 80) {
    console.log("Grade B");
}else if(score >= 70) {
    console.log("Grade C");
}else if(score >= 60) {
    console.log("Grade D");
}else {
    console.log("Grade F");
}

//Write code that takes a user's age and checks for "You're a minor" if the age is less than 18, and "You're an adult" otherwise.
var age = "17";
if(age < 18) {
    console.log("You are minor");
}else{
    console.log("You are adult"); 
}

//Write code that determines if a given year is a leap year and logs the result.
var year = 2024;
if(year % 4 === 0){
    console.log("Leap Year");
}else if(year % 400 === 0){
    console.log("Leap Year");
}else if(year % 100 === 0){
    console.log("Leap Year");
}else {
    console.log("Not a Leap Year");
}

//Problem 2: Marriage Eligibility Check:
//Create a JavaScript program to determine if a person is eligible for marriage based on their gender and age. If the person is male, check if he is 21 years or older; if yes, he is eligible. If the person is female, check if she is 18 years or older; if yes, she is eligible. Print a message indicating whether the person is eligible for marriage or not.
var age = 21;
var gender = "male";
if(gender === "male") {
    if(age >= 21) {
        console.log("He is Eligible for Marriage");
    }else {
        console.log("He is Not Eligible for Marriage");
    }
}else if(gender === "female") {
    if(age >= 18) {
        console.log("She is Eligible for Marriage");
    }else {
        console.log("She is Not Eligible for Marriage");
    } 
}else {
    console.log("Invalid gender input");
}

//Problem 3: Driving Eligibility:
//Create a program to determine if a person is eligible to obtain a driver's license. If the person is 16 or older, check if they have passed the written test. If they have passed the written test, they are eligible for a driver's license; otherwise, they are not eligible.
var test = "passed";
var age = 21;
if(test === "passed") {
     if(age >= 16) {
         console.log("Eligible for a Driver's License");
     }else{
        console.log("Not Eligible for a Driver's License");
     }
}else {
    console.log("Not Eligible because not clear the written test");
}

//Problem 4: Online Food Ordering:
//If the order total is $50 or more, the customer is eligible for free delivery. If the order total is less than $50, check the customer's loyalty status: If the customer is a loyalty member (yes/no), they are eligible for free delivery.If the customer is not a loyalty member, check the distance from the restaurant to the delivery address: If the distance is less than 5 miles, the customer is eligible for free delivery.If the distance is 5 miles or more, delivery is not free.
var orderTotal = 10;
var loyaltyStatus = "not";
var distance = 4;

if(orderTotal >= 50) {
    console.log("customer is eligible for free delivery");
}else if(orderTotal < 50) {
    if(loyaltyStatus === "yes") {
        console.log("customer is eligible for free delivery");
    }else if(distance < 5) {
        console.log("customer is eligible for free delivery");
    }else {
        console.log("customer is not eligible for free delivery");
    }
}else {
    console.log("customer is not eligible for free delivery");
}
