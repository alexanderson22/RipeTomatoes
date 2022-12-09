export default function MovieRating({ data }) {
  return !data ? (
    <p></p>
  ) : (
    data.slice(0, 5).map((movie) => <p>{movie.release_date}</p>)
  );
}
