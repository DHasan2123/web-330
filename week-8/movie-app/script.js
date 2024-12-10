/*
  Pragmatic JavaScript
  Chapter 4
  Programming Assignment

  Author: Dua Hasan
  Date: 12/09/24
  Filename: script.js
*/

"use strict";

const movies = [
  // Add your movie objects here
  {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    synopsis: "A skilled thief is given a chance at redemption if he can successfully perform inception."
 },
 {
  title: "The Matrix",
  director: "Lana Wachowski, Lilly Wachowski",
  year: 1999,
  synopsis: "A computer hacker learns about the true nature of his reality and his role in the war against its controllers."
 },
 {
  title: "Interstellar",
  director: "Christopher Nolan",
  year: 2014,
  synopsis: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
 }
];

function fetchMovie(title) {
  // Implement this function
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        const movie = movies.find(movie => movie.title.toLowerCase() === title.toLowerCase());
        if (movie) {
            resolve(movie);
        } else {
            reject(`Movie titled "${title}" not found.`);
        }
    }, 1000); // Simulate network delay
});
}

async function displayMovie(event) {
  event.preventDefault();
  const titleInput = document.getElementById("title-input").value;
  const errorMessage = document.getElementById("error-message");
  const movieTitle = document.getElementById("movie-title");
  const movieDirector = document.getElementById("movie-director");
  const movieYear = document.getElementById("movie-year");
  const movieSynopsis = document.getElementById("movie-synopsis");

  errorMessage.textContent = ""; // Clear previous error message
  movieTitle.textContent = "";
  movieDirector.textContent = "";
  movieYear.textContent = "";
  movieSynopsis.textContent = "";

  try {
    const movie = await fetchMovie(titleInput);
    movieTitle.textContent = `Title: ${movie.title}`;
    movieDirector.textContent = `Director: ${movie.director}`;
    movieYear.textContent = `Release Year: ${movie.year}`;
    movieSynopsis.textContent = `Synopsis: ${movie.synopsis}`;
  } catch (error) {
    errorMessage.textContent = error;
  }
}

document.getElementById("movie-form").addEventListener("submit", displayMovie);
