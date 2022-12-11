export default function MovieRating({ data }) {
  return !data ? <p></p> : data.map((movie) => <p>{movie.release_date}</p>);
}
