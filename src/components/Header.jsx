import { Link } from "react-router";
import { useState } from "react";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <nav className="nav">
                <div className="nav-block">
                    <div className="nav-logo">
                        <span className="nav-logoa">Oakrig</span>
                        <span className="nav-logob">Store</span>
                        </div>
                    <div
                        className="menumob"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span className="toggle">
                        {menuOpen ? "×" : "☰"}
                    </span>
                    </div>


                    <ul className={`nav-menu ${menuOpen ? "menu-active" : ""}`}>
                        <li className="nav-unit">
                            <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</Link>
                        </li>
                        <li className="nav-unit">
                            <Link to="/register" className="nav-link" onClick={() => setMenuOpen(false)}>Register</Link>
                        </li>
                        <li className="nav-unit">
                            <Link to="/login" className="nav-link" onClick={() => setMenuOpen(false)}>Login</Link>
                        </li>
                        <li className="nav-unit">
                            <Link to="/admin" className="nav-link" onClick={() => setMenuOpen(false)}>Admin</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Header;
