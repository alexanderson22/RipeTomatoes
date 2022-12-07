import "./App.css";
import { useState, useEffect } from "react";
import MovieInfo from "./MovieInfo.js";
import Entry from "./Entry.js";
import Receipt from "./Receipt.js";
import Button from "./Button";
import { SignIn } from "./services/authService";
import { SignOut } from "./services/authService";
import { useAuthentication } from "./services/authService";

import qr from "./qr.png";

export default function App() {
  const [movieName, setMovieName] = useState("");
  const [searchData, setSearchData] = useState("");
  const [data, setData] = useState("");
  const [loading, setLoading] = useState();
  const user = useAuthentication();

  useEffect(() => {
    //make spaces into +
    setLoading(true);
    const movie = encodeURIComponent(movieName.toLowerCase());
    const movieurl = `https://api.themoviedb.org/3/search/movie?api_key=37b53cbaa10e2c7d21434c2a90d92950&query=${movie}&page=1`;
    console.log(movieurl);
    fetch(movieurl)
      .then((r) => r.json())
      .then((data) => setSearchData(data.results[0].id));

    fetch(
      `https://api.themoviedb.org/3/movie/${searchData}/recommendations?api_key=37b53cbaa10e2c7d21434c2a90d92950&language=en-US&page=1`
    )
      .then((r) => r.json())
      .then((data) => setData(data.results));

    console.log(data);
    setLoading(false);
  }, [movieName]);

  return (
    //add action to Button

    // add loading state boolean var for a little loading wheel

    // for some reason the list shows after you search the second time
    <div className="App">
      <header className="App-header">
        {!user ? <SignIn /> : <SignOut />}

        {!data ? (
          <div>
            <h1>RipeTomatoes</h1>
            <h1>🍅</h1>
            <Entry action={setMovieName} />
          </div>
        ) : (
          // this should probably be in a receipt component / separated into mini components
          <div className="Receipt">
            <h1>RipeTomatoes</h1>
            <h2>web app 2021</h2>
            <h2>1 LMU Drive</h2>
            <h2>Los Angeles, CA 90045</h2>
            <MovieInfo data={data} movieName={movieName} />
            <img className="Qr" src={qr} alt="qr code"></img>
            <p>XXXXXXXXXXXX2021 CARD APPROVED</p>

            <p>search again?</p>
            <Entry action={setMovieName} />
          </div>
        )}
      </header>
    </div>
  );
}
