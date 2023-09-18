
import { Link } from "react-router-dom"

export const Menu = () => {
    return(
        <>
            <nav className="main-menu">
                <Link to="/" className="item-menu">Home</Link>
                <Link to="/favoritos" className="item-menu">Favoritos</Link>
            </nav>
        </>
    )
}