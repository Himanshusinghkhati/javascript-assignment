// 1. Initializing and Accessing 2D Arrays:
// Write a program to create a 2D array named matrix with dimensions 3x3. Access and log the element at the second row and third column.
var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  console.log(matrix[1][2]);

//2. Nested Loop Iteration:
//Write a program to use a nested loop to iterate over each element in a 2D array named grid and log each element to the console.
var grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[i].length; j++) {
      console.log(grid[i][j]);
    }
  }  

//3. Sum of Row Elements:
//Write a program to define a function rowSum(matrix, rowIndex) that takes a 2D array matrix and a rowIndex as parameters and returns the sum of all elements in the specified row.
function rowSum(matrix, rowIndex) {
    var sum = 0;
    for (var j = 0; j < matrix[rowIndex].length; j++) {
      sum += matrix[rowIndex][j];
    }
    return sum;
  }
  
  var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  var rowToSum = 1;
  var sumOfRow = rowSum(matrix, rowToSum);
  console.log("Sum of row " + rowToSum + ": " + sumOfRow);

//4. Column-wise Sum:
//Write a program to create a function columnSum(matrix, colIndex) that takes a 2D array matrix and a colIndex as parameters and returns the sum of all elements in the specified column.
function columnSum(matrix, colIndex) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
      sum += matrix[i][colIndex];
    }
    return sum;
  }
  var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  var colToSum = 1;
  var sumOfCol = columnSum(matrix, colToSum);
  console.log("Sum of column " + colToSum + ": " + sumOfCol);

//5. Finding Maximum Element:
//Write a program to define a function findMax(matrix) that takes a 2D array matrix as input and returns the maximum element present in the array.
function findMax(matrix) {
    var maxElement = matrix[0][0]; 
    for (var i = 0; i < matrix.length; i++) {
      for (var j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] > maxElement) {
          maxElement = matrix[i][j];
        }
      }
    }
    return maxElement;
  }
  var matrix = [
    [1, 2, 3],
    [4, 19, 6],
    [7, 8, 9]
  ];
  var maxNumber = findMax(matrix);
  console.log("Maximum element:", maxNumber);
  

  

    