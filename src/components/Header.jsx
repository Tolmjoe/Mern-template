import { Link } from "react-router";
import { useState, useRef, useEffect } from "react";
import Drop from "../components/Dropdown.jsx";
import "../stylesheets/mini-dropdown.css"
import "../stylesheets/Header.css"
import Search from "./Search-products.jsx";

function Header() {
    const [accountOpen, setAccountOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setAccountOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (  
        <>
            <nav className="nav">
                <div className="nav-block">
                    <div className="navup">
                    <Drop />

                    <div className="nav-logo">
                        <span className="nav-logoa">OAKRIGS</span>
                        <span className="nav-logob">Store</span>
                    </div>

                    <div className="acc-dropdown" ref={dropdownRef}>
                        <button className="acc-button" onClick={() => setAccountOpen(!accountOpen)}>
                            Account
                        </button>

                        <div className={`acc-menu ${accountOpen ? "show" : ""}`}>
                            <Link to="/register" onClick={() => setAccountOpen(false)}>Register</Link>
                            <Link to="/login" onClick={() => setAccountOpen(false)}>Login</Link>
                            <Link to="/admin" onClick={() => setAccountOpen(false)}>Admin</Link>
                        </div>
                    </div>
                    </div>

                </div>
                <div className="navdown">
                    <Search/>
                </div>
            </nav>
        </>
    );
}

export default Header;
