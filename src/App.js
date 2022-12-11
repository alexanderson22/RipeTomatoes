import "./App.css";
import { useState, useEffect } from "react";
import MovieInfo from "./MovieInfo.js";
import Entry from "./Entry.js";
import MovieRating from "./MovieRating.js";
import { SignIn } from "./services/authService";
import { SignOut } from "./services/authService";
import { useAuthentication } from "./services/authService";

import qr from "./qr.png";
import { auth } from "./firebaseConfig";

export default function App() {
  const [movieName, setMovieName] = useState("");
  const [data, setData] = useState("");
  const user = useAuthentication();

  useEffect(() => {
    const movie = encodeURIComponent(movieName.toLowerCase());
    const movieurl = `https://api.themoviedb.org/3/search/movie?api_key=37b53cbaa10e2c7d21434c2a90d92950&query=${movie}&page=1`;
    console.log(movieurl);

    fetchFirstMovieID().then(fetchRecommendations);

    function fetchFirstMovieID() {
      return fetch(movieurl)
        .then((r) => r.json())
        .then((data) => data.results[0].id);
    }

    function fetchRecommendations(id) {
      return fetch(
        `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=37b53cbaa10e2c7d21434c2a90d92950&language=en-US&page=1`
      )
        .then((r) => r.json())
        .then((data) =>
          setData(data.results.sort(() => 0.5 - Math.random()).slice(0, 5))
        );
    }

    console.log(data);
  }, [movieName]);

  useEffect(() => {
    if (!user) setData("");
  }, [user]);

  return (
    <div className="App">
      <header className="App-header">
        {!data || !user ? (
          <div>
            <h1>RipeTomatoes 🍅</h1>
          </div>
        ) : (
          <div className="Receipt">
            <div className="Overlay">
              <h1>RipeTomatoes 🍅</h1>
              <h2>web app 2021</h2>
              <h2>1 LMU Drive</h2>
              <h2>Los Angeles, CA 90045</h2>
              <div className="Map">
                <div className="MovieInfo">
                  <MovieInfo data={data} />
                  <p>=======================</p>
                  <p>Total:</p>
                </div>
                <div className="MovieRating">
                  <MovieRating data={data} />
                  <p>==========</p>
                  <p>{data.length}</p>
                </div>
              </div>

              <img className="Qr" src={qr} alt="qr code"></img>

              <div className="Card">
                <p>{auth.currentUser.displayName}</p>
                <p>XXXXXXXXXXXX2021 CARD APPROVED</p>
              </div>
              <p>Thank you, come again!</p>
            </div>
          </div>
        )}
        <div>
          {!user ? (
            <SignIn />
          ) : (
            <div className="searchAgain">
              <Entry action={setMovieName} />
              <SignOut />
            </div>
          )}
        </div>
      </header>
    </div>
  );
}
