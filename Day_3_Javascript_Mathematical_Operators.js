//Problem 1: Calculate the Square of a Number
//Write a JavaScript program to calculate and print the square of a given number.
var number = 3;
var squareRoot = number**2;
console.log(squareRoot);

//Problem 2: Play with Expressions
//Create a program that calculates the result of the following expression:
//(a + b) * c / d - e
//Take the above variables a, b, c, d, and e and store the value according to you then store the result of the above expression in a separate variable and print the result using console.log().
var a = 2, b = 3, c = 8, d = 4, e = 6;
var result = (a + b) * c / d - e;  
console.log(result);

//Problem 3: Variable Swap
//Write a JavaScript program to swap the values of two variables without using a temporary variable.
var a = 10;
var b = 5;
console.log("First Value =", a , "Second Value =", b);
a = a+b;
b = a-b;
a = a-b;
console.log("After swap First Value=", a, "Second Value", b)

//Problem 4: Convert Celsius to Fahrenheit
//Write a JavaScript program that converts a given temperature in Celsius to Fahrenheit.
//Formula: °F = (°C × 9/5) + 32
var celsiusTemperature = 25;
var fahrenheitTemperature = (celsiusTemperature * 9/5) + 32;
console.log("Temperature in Fahrenheit =", fahrenheitTemperature,"°F");

//Problem 5: Rectangle
//Write a JavaScript expression to calculate the area of a rectangle with a length of 8 units and a width of 5 units.
var length = 8;
var width = 5;
var area = length * width;
console.log("area of a rectangle=",area);

//Problem 5: Multiple of 5
//Take a variable, store a number, and check if a number is a multiple of 5.
var number = 50;
var multipleOfFive = number % 5;
//console.log(multipleOfFive);
console.log(multipleOfFive === 0 ? number + " is a multiple of 5" : number + " is not a multiple of 5");

