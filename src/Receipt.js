import MovieInfo from "./MovieInfo.js";
import Entry from "./Entry.js";

// for some reason the page crashes when i try to display this

export default function Receipt({ data, movieName, qr, setMovieName }) {
  return (
    <div>
      <Receipt />
      <h1>RipeTomatoes</h1>
      <MovieInfo data={data} movieName={movieName} />
      <img className="Qr" src={qr} alt="qr code"></img>
      <Entry action={setMovieName} />
    </div>
  );
}
