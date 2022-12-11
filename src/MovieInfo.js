export default function MovieInfo({ data }) {
  return !data ? (
    <p></p>
  ) : (
    data.map((movie) => <p>{movie.original_title.substring(0, 21)}</p>)
  );
}
