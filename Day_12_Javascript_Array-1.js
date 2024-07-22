// Problem 1:
// Perform the following tasks :
// 1. Create an array of vegetables
// 2. Store 3 vegetables
// 3. Print all the vegetables
let vegetables = ["carrot", "tomato", "potato"];
for (var i = 0; i < vegetables.length; i++) {
  console.log(vegetables[i]);
}

// Problem 2:
// Perform the following tasks :
// 1. Create an array price.
// 2. Store the prices of 3 products in the array
// 3. Print the price of the last product.
var price = [100, 200, 300];
console.log(price[price.length - 1]);

// Problem 3:
// Perform the following tasks :
// 1. Create an array of superheroes
// 2. push 4 superheroes in the array
// 3. Print the array
const superheroes = ["spiderman", "batman", "ironman", "superman"];
superheroes.push("hulk");
console.log(superheroes);

// Problem 4:
// Perform the following tasks :
// 1. Create an array of movies and actors
// 2. Print all the movies names with actors
let movies = ["Abcd", "Dool", "RRR", "KGF"];
let actors = ["Ramo", "Sahid", "Yash", "Yash"];
for (var i = 0; i < movies.length; i++) {
  console.log(movies[i] + " = " + actors[i]);
}