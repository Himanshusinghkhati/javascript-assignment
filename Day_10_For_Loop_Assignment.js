//1. Write a program to calculate the sum of all even numbers from 1 to 50 using a for loop.
var sum = 0;
for (var i=1; i<=50; i++){
     if(i % 2 === 0) {
        sum= sum + i;
     }
     console.log(sum);
}
//2. Write a program to print the first 10 natural numbers in reverse order using a for loop.
 for( var i=10; i>=1; i--) {
    console.log(i);
 }

//3. Write a program to generate the multiplication table of a given number (e.g.7) using a for loop.
var tableNumber = 7;
 for(var i=1; i<=10; i++) {
     console.log(tableNumber*i)
 }

//4. Write a program to find and display all the prime numbers between 1 and 100 using a for loop.
for (var num = 2; num <= 100; num++) {
    var divisors = 0; 
    
    for (var sp = 1; sp <= num; sp++) {
        if (num % sp == 0) {
            divisors++;
        }
    }

    if (divisors == 2) {
        console.log(num); 
    }
}

//5. Write a program to calculate the factorial of a given number (e.g., 5) using a for loop.
var factorialNumber = 5;
var factorial = 1;
for(var i=1; i<=factorialNumber; i++) {
    factorial = factorial * i;
}
console.log("Factorial of a given Number" +" " +factorial);

//6. Write a program to reverse a given string using a for loop (without using built-in reverse functions). 
var originalString = "Hello";
var reversedString = "";

for (var i = originalString.length - 1; i >= 0; i--) {
    reversedString += originalString[i];
}

console.log("Original String: " + originalString);
console.log("Reversed String: " + reversedString);

