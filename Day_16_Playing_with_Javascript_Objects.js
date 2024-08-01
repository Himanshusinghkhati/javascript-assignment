// 1. Write a program to create an object representing a bank account with properties like account number, account holder name, balance, and methods for deposit and withdrawal. Ensure proper validation for withdrawal to prevent overdraft.
const bankAccount = {
    accountHolderName: "Charam Singh",
    availableBalance: 5000,
    accountNumber: "123456789",
    
    deposit: function(accNumber, amount) {
      if (this.accountNumber === accNumber) {
        this.availableBalance += amount;
        console.log(`${this.accountHolderName}, ${amount} has been credited to your account number ${accNumber}`);
      } else {
        console.log("Invalid Account Number");
      }
    },
    
    withdrawal: function(accNumber, amount) {
      if (this.accountNumber === accNumber) {
        if (this.availableBalance >= amount) {
          this.availableBalance -= amount;
          console.log(`${this.accountHolderName}, ${amount} has been debited from your account number ${accNumber}`);
        } else {
          console.log("Insufficient Funds");
        }
      } else {
        console.log("Invalid Account Number");
      }
    },
    
    checkBalance: function(accNumber) {
      if (this.accountNumber === accNumber) {
        console.log(`Your Available Balance is: ${this.availableBalance}`);
      } else {
        console.log("Invalid Account Number");
      }
    }
  };
  
  bankAccount.checkBalance("123456789");
  bankAccount.deposit("123456789", 5000);
  bankAccount.checkBalance("123456789");
  bankAccount.withdrawal("123456789", 10000);
  bankAccount.checkBalance("123456789");
  
//2. Write a program to create an object representing a geometric shape (e.g.circle, rectangle) with properties like dimensions and methods for calculating area and perimeter. Implement it in a way that accommodates different shapes.
const shapeFactory = {
    createCircle: function(radius) {
      return {
        radius: radius,
        area: function() {
          return Math.PI * this.radius * this.radius;
        },
        perimeter: function() {
          return 2 * Math.PI * this.radius;
        }
      };
    },
  
    createRectangle: function(length, width) {
      return {
        length: length,
        width: width,
        area: function() {
          return this.length * this.width;
        },
        perimeter: function() {
          return 2 * (this.length + this.width);
        }
      };
    }
  };
  
  // Example usage
  const circle = shapeFactory.createCircle(5);
  console.log('Circle Area:', circle.area());
  console.log('Circle Perimeter:', circle.perimeter());
  
  const rectangle = shapeFactory.createRectangle(10, 5);
  console.log('Rectangle Area:', rectangle.area());
  console.log('Rectangle Perimeter:', rectangle.perimeter());
  
// 5. Write a program to create an object representing a weather forecast with properties like location, temperature, conditions, and methods for updating the forecast based on user input.
const weatherForecast = {
    location: '',
    temperature: 0,
    conditions: '',
  
    // Method to update the forecast
    updateForecast: function(location, temperature, conditions) {
      this.location = location;
      this.temperature = temperature;
      this.conditions = conditions;
    },
  
    // Method to display the forecast
    displayForecast: function() {
      console.log('Weather Forecast for ' + this.location + ':');
      console.log('Temperature: ' + this.temperature + '°C');
      console.log('Conditions: ' + this.conditions);
    }
  };
  
  // Example usage
  weatherForecast.updateForecast('Delhi', 25, 'Sunny');
  weatherForecast.displayForecast();
  
  weatherForecast.updateForecast('Ghaziabad', 15, 'Rainy');
  weatherForecast.displayForecast();
  
  