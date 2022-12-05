import "./App.css";
import { useState, useEffect } from "react";
import MovieInfo from "./MovieInfo.js";
import Entry from "./Entry.js";
import RecInfo from "./RecInfo.js";
import Button from "./Button";
export default function App() {
  const [recData, setrecData] = useState("");
  const [movieName, setMovieName] = useState("");
  const [data, setData] = useState("");
  const [movieID, setmovieID] = useState("");
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
      .then((r) => r.results[0].movieId)
      .then((movieId) => fetch(recurl))
      .then((r) => r.json())
      .then(data => setData());
  }, [movieName]);

  return (
    //add action to Button

    // maybe add a selector thing to choose if it's a tv show or movie; -D
    <div className="App">
      <header className="App-header">
        <h1>RipeTomatoes</h1>
        <h1>🍅</h1>
        <Entry action={setMovieName} />
        <Button action={getRanNum} name="Search" />
        <MovieInfo
          movieData={movieData}
          movieName={movieName}
        />
        <RecInfo
          recData={recData}
          movieId={movieId}
        />
      </header>
    </div>
  );
}
