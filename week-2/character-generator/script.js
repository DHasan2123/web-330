/*
  Pragmatic JavaScript
  Chapter 1
  Programming Assignment

  Author: Dua Hasan
  Date: 10/30/2024
  Filename: script.js
*/

"use strict";

function createCharacter(name, gender, characterClass) {
  // TODO: Implement this function
  return {
    getName: function() {
      return name;
    },
    getGender: function() {
      return gender;
    },
    getClass: function() {
      return characterClass;
    }
  };
}

document.getElementById("generateHero").addEventListener("click", function(e) {
  e.preventDefault();

  // TODO: Get form values
const name = document.getElementById("heroName").value;
const gender = document.getElementById("heroGender").value;
const characterClass = document.getElementById("heroClass").value;
  // TODO: Create character
const character = createCharacter(name, gender, characterClass);

  // TODO: Display character information
  document.getElementById("characterOutput").innerHTML = `
  <h2>Character Created!</h2>
  <p><strong>Name:</strong> ${character.getName()}</p>
  <p><strong>Gender:</strong> ${character.getGender()}</p>
  <p><strong>Class:</strong> ${character.getClass()}</p>
  `;
})
