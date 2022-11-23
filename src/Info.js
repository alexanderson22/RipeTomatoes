export default function Info({ tvdata, moviedata, tvName, movieName, tvGenre, rottenTomato}) {
    return !data || !tvName ? (
        <p></p>
    ) : !tvdata.title ? (
        <p>{tvName} cannot be found</p>
    ) : (
        <div>
            <ul>
                
            </ul>
        </div>
    )

}