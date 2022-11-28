export default function Info({
  tvdata,
  movieData,
  tvName,
  movieName,
  tvGenre,
  rottenTomato,
}) {
  return !tvdata || !tvName ? (
    <p></p>
  ) : !tvdata.title ? (
    <p>{tvName} cannot be found</p>
  ) : (
    <div>
      <ul></ul>
    </div>
  );
}
