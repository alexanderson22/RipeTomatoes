import "./App.css";
import { useState, useEffect } from "react";
import MovieInfo from "./MovieInfo.js";
import Entry from "./Entry.js";
import Button from "./Button";
export default function App() {
  const [movieName, setMovieName] = useState("");
  const [data, setData] = useState("");
  const [movieID, setmovieID] = useState("");
<<<<<<< HEAD
  var ranIndex = new Array(0);

  function getRanNum() {
    for (let i = 0; i < 5; i++) {
      ranIndex.push(Math.floor(Math.random() * 40));
    }
    return ranIndex;
  }
// try to return an array of 5 random numbers 
  useEffect(() => {
    //make spaces into +
    const movie= encodeURIComponent(movieName.toLowerCase());
    const movieurl = `https://api.themoviedb.org/3/search/movie?api_key=37b53cbaa10e2c7d21434c2a90d92950&query=${movie}&page=1`;
    const recurl = `https://api.themoviedb.org/3/movie/${movieID}/recommendations?api_key=37b53cbaa10e2c7d21434c2a90d92950&language=en-US&page=1`;
    console.log(movieurl);
    fetch(movieurl)
      .then((r) => r.json())
      .then((r) => r.results[0].movieID)
      .then((movieID) => fetch(recurl))
      .then((r) => r.json())
      .then(data => setData());
  }, [movieName]);
=======
  const user = useAuthentication();

  useEffect(() => {
    //make spaces into +
    const movie = encodeURIComponent(movieName.toLowerCase());
    const movieurl = `https://api.themoviedb.org/3/search/movie?api_key=37b53cbaa10e2c7d21434c2a90d92950&query=${movie}&page=1`;
    console.log(movieurl);
    fetch(movieurl)
      .then((r) => r.json())
      .then((r) => setMovieData(r))
      .catch((e) => setMovieData(e));
  }, [movieName]);

  useEffect(
    () => {
      //make spaces into +
      // filter in genre to url if possible
      const recurl = `https://api.themoviedb.org/3/movie/${movieID}/recommendations?api_key=37b53cbaa10e2c7d21434c2a90d92950&language=en-US&page=1`;
      console.log(recurl);
      fetch(movieurl)
        .then((r) => r.json())
        .then((r) => setrecData(r))
        .catch((e) => setrecData(e));
    },
    { movieID }
  );
>>>>>>> 6ac5a26fe07d98969d7681dadad93795d8296265

  return (
    //add action to Button

    // maybe add a selector thing to choose if it's a tv show or movie; -D
    // add loading state boolean var for a little loading wheel
    <div className="App">
      <header className="App-header">
        <h1>RipeTomatoes</h1>
        <h1>🍅</h1>
        <Entry action={setMovieName} />
        <Button action={getRanNum} name="Search" />
        <MovieInfo
<<<<<<< HEAD
          data={data}
          movieName={movieName}
=======
          movieData={{
            page: {
              results: [
                { id: 1, title: "Harry Potter" },
                { id: 2, title: "Batman" },
              ],
            },
          }}
        />
        <RecInfo
          recData={{
            page: {
              results: [
                { id: 3, title: "it" },
                { id: 4, title: "jaws" },
              ],
            },
          }}
>>>>>>> 6ac5a26fe07d98969d7681dadad93795d8296265
        />
      </header>
    </div>
  );
}
