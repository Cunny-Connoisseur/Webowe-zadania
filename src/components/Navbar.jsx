export default ({name}) => {
    return (<>
        <nav class="navbar navbar-expand-lg bg-body-tertiary w-100 sticky-top top-0 start-0 border-bottom">
            <div class="container-fluid">
                <a class="navbar-brand fw-bold text-primary" href="#">{name}</a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-body">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbar-body">
                    <ul class="navbar-nav ms-3 ms-lg-auto">
                        <li class="nav-item">
                            <a class="nav-link active" href="#galery">Galeria</a>
                        </li>
                        
                        <li class="nav-item">
                            <a class="nav-link" href="#categories">Kategorie</a>
                        </li>
                        
                        <li class="nav-item">
                            <a class="nav-link" href="#contact">Kontakt</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>)
}