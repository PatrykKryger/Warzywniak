import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav style={{ padding: "10px", background: "green" }}>
            <Link to="/" style={{ margin: "10px", color: "white" }}>Strona Główna</Link>
            <Link to="/oferta" style={{ margin: "10px", color: "white" }}>Oferta</Link>
            <Link to="/kontakt" style={{ margin: "10px", color: "white" }}>Kontakt</Link>
        </nav>
    )
}

export default Navbar
