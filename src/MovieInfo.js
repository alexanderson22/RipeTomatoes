export default function MovieInfo({
  data
}) {
  return !data ? (
    <p></p>
  ) : !data?.page.results[0].title ? (
    <p>{movieName} cannot be found</p>
  ) : (
    <div>
        {movieId = data.page.results[0].id} 
    </div>
  );
}
// page is 1, results is index 0.
// id is found in results[0] under id

// Want to ultimately return the movieId
