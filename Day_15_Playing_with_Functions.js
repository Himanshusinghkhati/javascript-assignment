// Problem 1:
// Write a program to create a function that accepts an array of numbers and returns a new array containing only the even numbers. Test the function with different arrays.

let testArray1 = [1, 2, 3, 4, 5, 6];
function filterEvenNumbers(arr) {
  let evenNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNumbers.push(arr[i]);
    }
  }
  return evenNumbers;
}

let result = filterEvenNumbers(testArray1);

console.log("Even numbers in [1, 2, 3, 4, 5, 6]:", result);

// Problem 4:
// Write a program to create a function that accepts a temperature in Celsius and converts it to Fahrenheit. Test the function with different temperature values.
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
let tempCelsius1 = 0;
let result1 = celsiusToFahrenheit(tempCelsius1);
console.log(`${tempCelsius1}°C is ${result1}°F`);

// Problem 5:
// Write a program to implement a function that finds the largest element in an array of numbers. Test the function with different arrays.

function findLargestElement(arr) {
  if (arr.length === 0) {
    return null;
  }
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}
let testArr = [1, 2, 3, 4, 5, 6, 90];
let result2 = findLargestElement(testArr);
console.log(`Largest element in [1, 2, 3, 4, 5, 6, 90]: ${result2}`);

// Problem 7:
// Write a program to create a function that accepts two arrays and merges them into a single array. Test the function with arrays of different lengths.

function mergeArrays(arr1, arr2) {
  return arr1.concat(arr2);
}

let arrayFirst = [1, 2, 3];
let arraySecond = [4, 5, 6];

let resultFirst = mergeArrays(arrayFirst, arraySecond);
console.log(`Merging [1, 2, 3] and [4, 5, 6]:`, resultFirst);

// Problem 8:
// Write a program to implement a function that calculates the area of a circle. The function should take the radius as a parameter and return the area. Test the function with different radius values.

function calculateAreaOfCircle(radius) {
  if (radius < 0) {
    return null;
  }
  return Math.PI * radius * radius;
}

let radius1 = 10;

let resultCircle = calculateAreaOfCircle(radius1);

console.log(`The area of a circle with radius ${radius1} is: ${resultCircle}`);