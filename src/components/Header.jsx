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
                <button type="button" className="btn btn-secondary me-2" data-bs-toggle="offcanvas" data-bs-target="#filter-offcanvas">
                    Filtry
                </button>

                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#new_image-modal">
                    Dodaj nowe zdjęcie
                </button>
            </div>
        </div>
    </>)
}