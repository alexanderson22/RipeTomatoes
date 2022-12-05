export default function MovieInfo({
  data
}) {
  return !data ? (
    <p></p>
  ) : !data?.results[0].title ? (
    <p>{data.results[0].title} cannot be found</p>
  ) : (
    <div>
       
    </div>
  );
}
// page is 1, results is index 0.
// id is found in results[0] under id

// Want to ultimately return the movieId
