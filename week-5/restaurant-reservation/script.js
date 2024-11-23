/*
  Pragmatic JavaScript
  Chapter 2
  Programming Assignment

  Author: Dua Hasan
  Date: 11/22/24
  Filename: script.js
*/

// Create an in-memory object array for each table in the restaurant
let tables = [
  // Add your table objects here
  { tableNumber: 1, capacity: 4, isReserved: false },
  { tableNumber: 2, capacity: 2, isReserved: false },
  { tableNumber: 3, capacity: 6, isReserved: false },
  { tableNumber: 4, capacity: 4, isReserved: false },
  { tableNumber: 5, capacity: 8, isReserved: false },
];

// Create a function reserveTable
function reserveTable(tableNumber, callback, time) {
  const table = tables.find(t => t.tableNumber === parseInt(tableNumber));

  if (table && !table.isReserved) {
      table.isReserved = true; // Mark as reserved
      setTimeout(() => {
          callback(`Success: Table ${tableNumber} has been reserved.`);
      }, time); // Wait for specified time, then call callback
  } else {
      callback(`Error: Table ${tableNumber} is already reserved.`);
  }

}

// When the form is submitted, call the reserveTable function
document
  .getElementById("reservationForm")
  .addEventListener("submit", function (e) {
    // Add your code here
    e.preventDefault(); // Prevent the form from submitting normally

    const name = document.getElementById("name").value;
    const tableNumber = document.getElementById("tableNumber").value;

    if (name && tableNumber) {
      // Call reserveTable with the table number, callback, and time delay
      const waitTime = 2000; // 2 seconds delay for simulation

      reserveTable(tableNumber, (message) => {
        const messageElement = document.getElementById("message");
        messageElement.textContent = message; // Update the message on the webpage
      }, waitTime);
    } else {
      alert("Please enter both your name and select a table number.");
    }
  });
