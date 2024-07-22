// 1. Find the Smallest and Largest Elements:
// Write a program to find and display both the smallest and largest elements in an array without sorting the array.
let arr = [1, 2, 3, 4, 5];
let min = arr[0];
let max = arr[0];
for (var i = 1; i < arr.length; i++) {
  if (min > arr[i]) {
    min = arr[i];
  }
}
for (var i = 1; i < arr.length; i++) {
  if (max < arr[i]) {
    max = arr[i];
  }
}
console.log("Smallest number is " + min);
console.log("Largest number is " + max);

// 2. Sum of Two Arrays:
// Write a program to add two arrays element-wise and create a new array with the results.
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
let arr3 = [];
for (var i = 0; i < arr1.length; i++) {
  arr3[i] = arr1[i] + arr2[i];
}
console.log(arr3);

// 3. Array Intersection:
// Write a program to find the intersection of two arrays (elements that are common in both arrays) and store the result in a new array.
let arr4 = [1, 2, 3, 4, 5];
let arr5 = [1, 2, 3, 4, 5, 6, 7];
let arr6 = [];
for (var i = 0; i < arr4.length; i++) {
  for (var j = 0; j < arr5.length; j++) {
    if (arr4[i] == arr5[j]) {
      arr6.push(arr4[i]);
    }
  }
}
console.log("Common elements are " + arr6);

// 4. Array Palindrome:
// Write a program to check if an array is a palindrome (reads the same forwards and backwards).
let arr7 = [1, 2, 3, 2, 1];
let flag = true;
for (var i = 0; i < arr7.length / 2; i++) {
  if (arr7[i] != arr7[arr7.length - 1 - i]) {
    flag = false;
    break;
  }
}
if (flag) {
  console.log("Array is palindrome");
} else {
  console.log("Array is not palindrome");
}

// 5. Remove Duplicates:
// Write a program to remove duplicate elements from an array without using built-in methods.
var array = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 7];
var array1 = [];
for (var i = 0; i < array.length; i++) {
  if (array1.indexOf(array[i]) == -1) {
    array1.push(array[i]);
  }
}
console.log(array1);

// 6. Array Filtering:
// Write a program to filter out even and odd numbers from an array and create two separate arrays for even and odd numbers.
let arr8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even = [];
let odd = [];
for (var i = 0; i < arr8.length; i++) {
  if (arr8[i] % 2 == 0) {
    even.push(arr8[i]);
  }
  if (arr8[i] % 2 !== 0) {
    odd.push(arr8[i]);
  }
}
console.log("even number" + even);
console.log("odd number" + odd);

// 7. Filter Strings by Length:
// Write a program to filter out all strings from an array that have a length greater than a specified value.
let arr9 = ["apple", "banana", "orange", "grape", "kiwi"];
let arr10 = [];
for (var i = 0; i < arr9.length; i++) {
  if (arr9[i].length > 5) {
    arr10.push(arr9[i]);
  }
}
console.log(arr10);

// 8. Filter Prime Numbers:
// Write a program to filter out all prime numbers from an array and create a new array with only the prime numbers
let arr11 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr12 = [];
for (var i = 0; i < arr11.length; i++) {
  let flag = true;
  for (var j = 2; j < arr11[i]; j++) {
    if (arr11[i] % j == 0) {
      flag = false;
      break;
    }
  }
  if (flag) {
    arr12.push(arr11[i]);
  }
}
console.log(arr12);