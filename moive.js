const queryKeyword = "inter";
const page = 10;
const BASE_URL = "https://api.themoviedb.org/3";
const endpoint = `${BASE_URL}/search/keyword?query=${queryKeyword}&page=${page}`;

const TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MDRhZDg0YTEzODRkMDRjNGY0YWVlMzZmNGE5YjE0OCIsInN1YiI6IjVlZWUwOTAwYjA0NjA1MDAzNDBlOTg2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H7gQK0dgqOvsQmsHsgtOmsqKVFmnb1urXF3q9AkqyCE";

const option = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${TOKEN}`,
  },
};

/*
fetch(endpoint, option)
  .then((result) => result.json())
  .then((data) => console.log(data))
  .then((err) => console.log(err));
*/

async function moiveSearch() {
  try {
    let result = await fetch(endpoint, option);
    let data = await result.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
moiveSearch();
