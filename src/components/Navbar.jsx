export default ({name}) => {
    return (<>
        <nav className="navbar navbar-expand-lg bg-body-tertiary w-100 sticky-top top-0 start-0 border-bottom">
            <div className="container-fluid">
                <a className="navbar-brand fw-bold text-primary" href="#">{name}</a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-body">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbar-body">
                    <ul className="navbar-nav ms-3 ms-lg-auto">
                        <li className="nav-item">
                            <a className="nav-link active" href="#gallery">Galeria</a>
                        </li>
                        
                        <li className="nav-item">
                            <a className="nav-link" href="#categories">Kategorie</a>
                        </li>
                        
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Kontakt</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>)
}