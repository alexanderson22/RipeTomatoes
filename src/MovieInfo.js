export default function MovieInfo({
  movieData, movieName
}) {
  return !movieData ? (
    <p></p>
  ) : !movieData?.page.results[0].title ? (
    <p>{movieName} cannot be found</p>
  ) : (
    <div>
      <ul>
        {movieData.page.results[0].id}
        <li></li>
      </ul>
    </div>
  );
}
// page is 1, results is index 0.
// id is found in results[0] under id

// Want to ultimately return the movieId

// What does ul do?