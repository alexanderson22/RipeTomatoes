export default function MovieInfo({ data }) {
  return !data ? (
    <p></p>
  ) : (
    data
      .sort(() => 0.5 - Math.random())
      .slice(0, 5)
      .map((movie) => <p>{movie.original_title}</p>)
  );
}
