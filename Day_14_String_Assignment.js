// Problem 1:
// Reverse a String: Write a program to reverse a given string. For example, if the input is "hello," the output should be "olleh."
let str = "hello";
let str1 = "";
for (var i = str.length - 1; i >= 0; i--) {
  str1 = str1 + str[i];
}
console.log(str1);

// Problem 2:
// Count Vowels and Consonants: Write a program to count the number of vowels and consonants in a given string.
let str2 = "hello";
let vowels = 0;
let consonants = 0;
for (var i = 0; i < str2.length; i++) {
  if (
    str2[i] == "a" ||
    str2[i] == "e" ||
    str2[i] == "i" ||
    str2[i] == "o" ||
    str2[i] == "u"
  ) {
    vowels++;
  } else {
    consonants++;
  }
}
console.log("Vowels are " + vowels);
console.log("Consonants are " + consonants);

// Problem 3:
// Check Palindrome: Write a program to check if a given string is a palindrome (reads the same forwards and backwards). For example, "racecar" is a palindrome.
let str3 = "racecar";
let flag1 = true;
for (var i = 0; i < str3.length / 2; i++) {
  if (str3[i] != str3[str3.length - 1 - i]) {
    flag1 = false;
    break;
  }
}
if (flag1) {
  console.log("Sting is Palindrome");
} else {
  console.log("String is Not Palindrome");
}

// Problem 4:
// Title Case a Sentence: Write a program to convert the first character of each word in a sentence to uppercase and the rest to lowercase.
let sentence = "thiS IS the fIRSt cHARActer";
let words = sentence.split(" ");
for (let i = 0; i < words.length; i++) {
  words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
}
let result = words.join(" ");
console.log(result);

// Problem 5:
// Remove Duplicates: Write a program to remove duplicate characters from a string while maintaining the original order. For example, "hello" becomes "helo."
let str4 = "hello";
let str5 = "";
for (var i = 0; i < str4.length; i++) {
  if (str5.indexOf(str4[i]) == -1) {
    str5 = str5 + str4[i];
  }
}
console.log(str5);

// Problem 6:
// Write a JavaScript program that removes all occurrences of the character 'a' from a given string
let str6 = "banana";
let str7 = "";
for (var i = 0; i < str6.length; i++) {
  if (str6[i] != "a") {
    str7 = str7 + str6[i];
  }
}
console.log(str7);

// Problem 7:
// You are given an array of names containing a list of names. Your task is to count the number of names that start with either 'N' or 'n'.
// Input: names = ["Nathan", "John", "Alice", "Nancy", "Bob"]
// Output: 2
let names = ["Nathan", "John", "Alice", "Nancy", "Bob"];
let count = 0;
for (var i = 0; i < names.length; i++) {
  if (names[i][0] == "N" || names[i][0] == "n") {
    count++;
  }
}
console.log(count);

// Problem 8:
// You are given a lowercase string input . Your task is to convert this string to uppercase without using any built-in string methods.
// Input: input = "hello"
// Output: HELLO
let input = "hello";
let output = "";
for (var i = 0; i < input.length; i++) {
  output = output + input[i].toUpperCase();
}
console.log(output);
