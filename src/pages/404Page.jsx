import { Link } from "react-router-dom"

export default ({}) => {
    
    return (<>
        <div className="container mt-4">
            <h1>Strona nie znaleziona.</h1>

            <Link to={'/'}>
                Wróć na stronę główną
            </Link>
        </div>
    </>)
}