/* ¡Escribe tus comandos en este archivo! */

const ejercicio02 = "SELECT * FROM movies WHERE duration < 90;";

const ejercicio03 = "SELECT * FROM movies WHERE year >= 1930 AND year <= 1940;";
// const ejercicio03 = "SELECT * FROM movies WHERE year BETWEEN 1930 AND 1940;";

const ejercicio04 = "SELECT * FROM movies WHERE title ILIKE 'til%';";

const ejercicio05 = "SELECT * FROM movies WHERE ARRAY_LENGTH(actors,1) = 1;";

// const ejercicio05 = 'SELECT * FROM movies WHERE cardinality(actors) = 1;'

const ejercicio06 =
  "SELECT title, AVG(rating) AS promedio FROM movies, UNNEST(ratings) AS rating GROUP BY title;";

// const ejercicio06 = SELECT title,(SELECT ROUND(AVG(rating), 2) FROM UNNEST(ratings) AS rating) FROM movies;

// const ejercicio06 = SELECT title, ROUND(AVG(rating),2) AS promedio FROM movies, UNNEST(ratings) AS rating GROUP BY title;

const ejercicio07 =
  "SELECT actors FROM movies WHERE title LIKE '%Fast and%' AND year = 2016;";

module.exports = {
  ejercicio02,
  ejercicio03,
  ejercicio04,
  ejercicio05,
  ejercicio06,
  ejercicio07,
};
