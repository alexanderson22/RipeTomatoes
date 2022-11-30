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
  ) : !tvdata.Title ? (
    <p>{tvdata.Title} cannot be found</p>
  ) : (
    <div>
      <ul>
        <li>{tvdata.Title}</li>
        <li>
          <img src={tvdata.Poster}></img>
        </li>
      </ul>
    </div>
  );
}
