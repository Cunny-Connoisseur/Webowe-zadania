import { Link, NavLink, Outlet } from "react-router-dom"
import Footer from "./Footer"

export default ({}) => {
    
    return (<>
        <nav className="navbar navbar-expand-lg bg-body-tertiary w-100 top-0 start-0 border-bottom">
            <div className="container-fluid">
                <Link className="text-primary navbar-brand fw-bold" to={"/"}>
                    Galaria Zdjęć
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-body">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbar-body">
                    <ul className="navbar-nav ms-3 ms-lg-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/" end>
                                Galeria
                            </NavLink>
                        </li>
                        
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/add"}>
                                Dodaj zdjęcie
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <Outlet />

        <Footer />
    </>)
}