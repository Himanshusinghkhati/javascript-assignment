//Problem 1:
// Voting Eligibility: Write a program that checks whether a person can vote. To be eligible, a person must be at least 18 years old and a citizen of the country.
var age = 20;
var isCitenzen = true;
if ( age>=18 && isCitenzen){
    console.log("Eligible");
}else{
    console.log("Not Eligible");
}

//Problem 2:
//Discount Eligibility: Create a program for a store that offers a discount on a purchase. To receive the discount customers must have a valid membership card (hasMembershipCard) and spend more than 2000.
var moneySpend = 2000;
var hasMembershipCard = true;
if (moneySpend >= 2000 && hasMembershipCard){
     console.log("Received Discount");
}else{
    console.log("Not able to Receive the Discount");
}

//Problem 3:
//Online Shopping Discount: Build an online shopping website that discounts orders. Customers are eligible for the discount if they purchase at least two items (numItems >= 2) and the total order value exceeds 5000 (totalOrderValue > 5000).
var purchaseItem = 2;
var totalOrderValue = 5000;
if (purchaseItem >= 2 && totalOrderValue >= 5000){
    console.log("Customers are eligible for the discount");
}else{
    console.log("Customers not eligible for the discount");
}

//Problem 4:
//Check Vowel and Consonant: determine if a given character is a vowel or a consonant. If the character is a lowercase or uppercase vowel (a, e, i, o, u, A, E, I, O, U), consider it a vowel; otherwise, consider it a consonant.
var char = "a";
var lowerChar = char.toLowerCase();
if (lowerChar == "a" || lowerChar == "e" || lowerChar == "i" || lowerChar == "o" || lowerChar == "u"){
     console.log("character is vowel");
}else{
    console.log("character is consonant");
}

//Problem 5:
// Temperature Range: determine if a given temperature is within a comfortable range for outdoor activities. If the temperature is between 65°F and 85°F (temperature >= 65 && temperature <= 85), it's considered comfortable. If it's outside this range, it's either too hot or too cold for outdoor activities.
var temp = 99;
if (temp >= 65 && temp <= 85) {
     console.log("Good weather you can play");
}else{
    console.log("too hot or too cold for outdoor activities.");
}

//Problem 6:
//Dinner Options: decide where to have dinner with your family. If your favorite restaurant has a discount (isSpecialOffer) or you're craving pizza (cravingPizza), choose one of those options; otherwise, cook dinner at home. Use the OR operator.
var isSpecialOffer = true;
var cravingPizza = false;
if (isSpecialOffer || cravingPizza){
     console.log("Let's go out for dinner.");
}else {
    console.log("Let's cook dinner at home.");
}

//Problem 7:
//Login Authentication: program for a website login system. Users should be authenticated if they enter the correct username and password. If the user enters the wrong password (enteredPassword !== correctPassword), display an error message. Use the logical NOT operator to perform this check.
var username = "admin";
var password = 123456;
if (username == "admin" && password == 12345){
     console.log("Login Successfully");
}else if (username == "admin" && password !== 12345){
    console.log("Error: Incorrect password.");
} else {
  console.log("Error: Incorrect username.");
}

//Problem 8:
//Weather Forecast: Build a weather app that informs users about the weather conditions. If the weather forecast predicts no rain (!isRaining), display a message indicating that it's a good day for outdoor activities.
var isRaining = false;
if (!isRaining){
    console.log("It's a good day for outdoor activities.");
}else {
    console.log("Not a good day for outdoor activities.");
}

//Problem 9:
//Inventory Management: program for inventory management. If an item is out of stock (isOutOfStock is true), display a notification. Use the logical NOT operator to check if the item is in stock.
var isOutOfStock = true;
if (!isOutOfStock){
   console.log("The Item is in Stock");
}else {
    console.log("The Item not in Stock");
}