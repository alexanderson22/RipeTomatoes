export default function RecInfo({
    recData, movieId
  }) {
    return !recData ? (
      <p></p>
    ) : !recData.page.results[ranNum].title ? (
      <p></p>
    ) : (
      <div>
        <ul>
          {recData.page.results[ranNum].map(() => (
            <li> key={} </li>
          ))}
        </ul>
      </div>
    );
  }

  // make a random number generator between 0 and 39 for index of results.

  // for loop needed to get the 5 or 10 recommendations

