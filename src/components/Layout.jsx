import { Link, NavLink, Outlet } from "react-router-dom"
import Footer from "./Footer"

export default ({}) => {
    
    return (<>
        <nav className="navbar, navbar-expand, bg-body-tertiary border-bottom">
            <div className="container">
                <Link className="navbar-brand fw-bold" to={"/"}>
                    Galaria Zdjęć
                </Link>

                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" to={"/"} end>
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
        </nav>

        <Outlet />

        <Footer />
    </>)
}