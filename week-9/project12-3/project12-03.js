"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-03

      Project to show a recipe with expanding/contracting content
      Author: Dua Hasan
      Date:   12/19/2024

      Filename: project12-03.js
*/

$(document).ready(function () {
      // Apply click event to h2 headings
      $("article > h2").click(function () {
          // Declare variables
          let heading = $(this); // Heading clicked
          let list = heading.next(); // Next sibling (ul or ol)
          let headingImage = heading.children("img"); // <img> child of the heading
  
          // Toggle the list with slide effect
          list.slideToggle(500);
  
          // Toggle the image source between plus.png and minus.png
          if (headingImage.attr("src") === "plus.png") {
              headingImage.attr("src", "minus.png");
          } else {
              headingImage.attr("src", "plus.png");
          }
      });

})