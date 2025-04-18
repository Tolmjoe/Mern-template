import {Link} from "react-router";
import Products from "./Products.jsx";

function Body() {
    return (
        <>
        <div className="body">
            <p className="introText">Mern Commerce is your Number One <span className="hub">HUB</span> in buying all things green!
            <Link className="sublink" to="/register">Register</Link> and shop with us today to get a 70% discount off your first purchase!
            </p>
                <hr/>
            <Products/>


        </div>
        </>
    );
}


export default Body;