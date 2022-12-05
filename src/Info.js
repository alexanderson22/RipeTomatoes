export default function Info({ recdata, movieData }) {
  return !movieData || !movieName ? (
    <p></p>
  ) : !movieData.Title ? (
    <p>{movieData.Title} cannot be found</p>
  ) : (
    <div>
      <ul>
        <li>{movieData.Title}</li>
        <li></li>
      </ul>
    </div>
  );
}
