import "./App.css";
import { useState, useEffect } from "react";
import Info from "./Info";
import Entry from "./Entry.js";
import Button from "./Button";
export default function App() {
  const [recdata, setrecData] = useState("");
  const [movieName, setMovieName] = useState("");
  const [movieData, setMovieData] = useState("");
  const [movieID, setmovieID] = useState("");

  useEffect(() => {
    //make spaces into +
    const movie= encodeURIComponent(movieName.toLowerCase());
    const movieurl = `https://api.themoviedb.org/3/search/movie?api_key=37b53cbaa10e2c7d21434c2a90d92950&query=${movie}&page=1`;
    console.log(movieurl);
    fetch(movieurl)
      .then((r) => r.json())
      .then((r) => setMovieData(r))
      .catch((e) => setMovieData(e));
  }, [movieName]);

  useEffect(() => {
    //make spaces into +
    // filter in genre to url if possible
    const recurl = `https://api.themoviedb.org/3/movie/${movieID}/recommendations?api_key=37b53cbaa10e2c7d21434c2a90d92950&language=en-US&page=1`;
    console.log(recurl);
    fetch(movieurl)
      .then((r) => r.json())
      .then((r) => setrecData(r))
      .catch((e) => setrecData(e));
  }, {movieID});

  return (
    //add action to Button

    // maybe add a selector thing to choose if it's a tv show or movie; -D
    // add loading state boolean var for a little loading wheel
    <div className="App">
      <header className="App-header">
        <h1>RipeTomatoes</h1>
        <h1>🍅</h1>
        <Entry action={setTVName} />
        <Button name="Search" />
        <Info
          tvName={tvName}
          tvdata={tvdata}
          movieName={movieName}
          tvGenre={tvGenre}
          rottenTomato={rottenTomato}
        />
      </header>
    </div>
  );
}
