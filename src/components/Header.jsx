import { Link } from "react-router-dom"

export default ({}) => {
    return (<>
        <div className="row g-2">
            <div className="col-12">
                <h1>Galeria zdjęć</h1>
            </div>
        </div>

        <div className="row g-2">
            <div className="col-12 col-lg-8">
                <p>
                    Przeróżne zdjęcia z różnych miejsc. Wybierz kategorię aby zobaczyć zdjęcia, które Ciebie interesują.
                </p>
            </div>

            <div className="col-12 col-lg-4 justify-content-lg-end align-items-center d-flex">
                <Link to={"/dodaj"} className="btn btn-primary">
                    Dodaj nowe zdjęcie
                </Link>
            </div>
        </div>
    </>)
}