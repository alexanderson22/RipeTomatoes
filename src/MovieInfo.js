export default function MovieInfo({ data }) {
  return !data ? (
    <p></p>
  ) : (
    data.slice(0, 5).map((movie) => <p>{movie.original_title}</p>)
  );
}
