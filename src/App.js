import "./App.css";
import { useState, useEffect } from "react";
export default function App() {
  const [data, setData] = useState("");
  const [tvGenre, setTVGenre] = useState("");
  const [tvName, setTVName] = useState("");
  const [movieGenre, setMovieGenre] = useState("");
  const [movieName, setMovieName] = useState("");
  const [rottenTomato, setRottenTomato] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <h1>RipeTomatoes</h1>
        <h1>🍅</h1>
      </header>
    </div>
  );
}

