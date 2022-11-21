import "./App.css";
import { useState, useEffect } from "react";
import Info from "./Info";
import Entry from "./Entry.js";
import Button from "./Button";
export default function App() {
  const [data, setData] = useState("");
  const [tvGenre, setTVGenre] = useState("");
  const [tvName, setTVName] = useState("");
  const [movieGenre, setMovieGenre] = useState("");
  const [movieName, setMovieName] = useState("");
  const [rottenTomato, setRottenTomato] = useState("");
  const {index, setIndex} = useState(0);

  
  useEffect(() => {
    //make spaces into +
    const tvTitle = encodeURIComponent(tvName.toLowerCase());
    const url = `https://www.omdbapi.com/?apikey=1d9975b5&t=${tvTitle}`;
    console.log(url);
    fetch(url)
      .then((r) => r.json())
      .then((r) => setData(r))
      .catch((e) => setData(e));
  }, [tvName]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>RipeTomatoes</h1>
        <h1>🍅</h1>
        <Entry action={setTVName} />
        <Button action={setIndex} name="Search" />
      </header>
      <Info />
    </div>
  );
}

