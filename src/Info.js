export default function Info({ data, tvName, movieName, tvGenre, rottenTomato}) {
    return !data || !tvName ? (
        <p></p>
    ) : !data.title ? (
        <p>{tvName} cannot be found</p>
    ) : (
        <div>
            <ul>
                
            </ul>
        </div>
    )

}