import {Link} from "react-router";

function Header(){
    return (
        <>
        <ul>
            <Link to="/">Home</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            <Link to="/admin">Admin</Link>
        </ul>
        </>
    );
}


export default Header;