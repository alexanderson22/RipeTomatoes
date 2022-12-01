export default function recInfo({
    recData
  }) {
    return !recData ? (
      <p></p>
    ) : !recData.Title ? (
      <p>{recData.Title} cannot be found</p>
    ) : (
      <div>
        <ul>
          <li>{recData.Title}</li>
          <li>
            
          </li>
        </ul>
      </div>
    );
  }