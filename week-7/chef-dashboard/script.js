/*
  Pragmatic JavaScript
  Chapter 3
  Programming Assignment

  Author: Dua Hasan
  Date: 12/03/24
  Filename: script.js
*/

"use strict";

// TODO: Define an array of chef objects
let chefs = [
  // Each chef object should have a name, specialty, weakness, and restaurantLocation
  {
    name: "Gordon Ramsay",
    specialty: "Fine Dining and British Cuisine",
    weakness: "Impatience",
    restaurantLocation: "London, England"
  },
  {
    name: "Jamie Oliver",
    specialty: "Healthy and Home-Cooked Meals",
    weakness: "Tendency to overcomplicate simple dishes",
    restaurantLocation: "London, England"
  },
  {
    name: "Ina Garten",
    specialty: "Simple and Elegant American Cuisine",
    weakness: "Avoids too many exotic ingredients",
    restaurantLocation: "East Hampton, New York"
  }
];

// TODO: Define a function to retrieve the first chef's information
function retrieveChef1() {
  // This function should return a promise that resolves with the chef's information after a delay
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.7) { // 70% chance to succeed
        resolve(chefs[0]);
      } else {
        reject("Error retrieving data for Chef 1");
      }
    }, 2000); // 2 seconds delay
  });
}

// TODO: Define a function to retrieve the second chef's information
function retrieveChef2() {
  // This function should return a promise that resolves with the chef's information after a delay
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.7) { // 70% chance to succeed
        resolve(chefs[1]);
      } else {
        reject("Error retrieving data for Chef 2");
      }
    }, 4000); // 4 seconds delay
  });
}

// TODO: Define a function to retrieve the third chef's information
function retrieveChef3() {
  // This function should return a promise that resolves with the chef's information after a delay
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.7) { // 70% chance to succeed
        resolve(chefs[2]);
      } else {
        reject("Error retrieving data for Chef 3");
      }
    }, 6000); // 6 seconds delay
  });
}

// TODO: Use Promise.allSettled to retrieve all chefs' information and update the webpage accordingly
Promise.allSettled([retrieveChef1(), retrieveChef2(), retrieveChef3()])
  .then(results => {
    results.forEach((result, index) => {
      const dataElement = document.getElementById(`chef${index + 1}-data`);
      const errorElement = document.getElementById(`chef${index + 1}-error`);

      if (result.status === 'fulfilled') {
        // Update the webpage with the chef data
        dataElement.innerHTML = `
          Name: ${result.value.name}<br>
          Specialty: ${result.value.specialty}<br>
          Weakness: ${result.value.weakness}<br>
          Restaurant Location: ${result.value.restaurantLocation}
        `;
        errorElement.innerHTML = ''; // Clear any error message
      } else {
        // Handle promise rejection and show an error message
        errorElement.innerHTML = result.reason;
        dataElement.innerHTML = ''; // Clear any data from the previous state
      }
    });
  })
  .catch(error => {
    console.error("An error occurred while retrieving chef data:", error);
  });