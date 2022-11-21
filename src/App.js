import "./App.css";
import { useState, useEffect } from "react";
import Info from "./Info";
import Entry from "./Entry.js";
import Button from "./Button";
export default function App() {
  const [data, setData] = useState("");
  const [tvGenre, setTVGenre] = useState("");
  const [tvName, setTVName] = useState("");
  const [movieName, setMovieName] = useState("");
  const [rottenTomato, setRottenTomato] = useState("");
  
  useEffect(() => {
    //make spaces into +
    const show = encodeURIComponent(tvName.toLowerCase());
    const url = `https://www.omdbapi.com/?apikey=1d9975b5&t=${show}`;
    console.log(url);
    fetch(url)
      .then((r) => r.json())
      .then((r) => setData(r))
      .catch((e) => setData(e));
  }, [tvName]);

  return (
    //add action to Button
    <div className="App">
      <header className="App-header">
        <h1>RipeTomatoes</h1>
        <h1>🍅</h1>
        <Entry action={setTVName} />
        <Button name="Search" />
      </header>
      <Info tvName={tvName} data={data} movieName={movieName} tvGenre={tvGenre} rottenTomato={rottenTomato} />
    </div>
  );
}

