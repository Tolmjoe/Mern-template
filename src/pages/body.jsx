import {Link} from "react-router";
import Products from "../components/Products.jsx";
import Search from "../components/Search-products.jsx";

function Body() {
    return (
        <>
           <div className="searchBack"> <Search/> </div>
        <div className="body">
            <p className="introText">Oakrig's Store is your Number One <span className="hub">HUB</span> in buying all things green!
            <Link className="sublink" to="/register">Register</Link> and shop with us today to get a 70% discount off your first purchase!
            </p>
                <hr/>
            <Products/>


        </div>
        </>
    );
}


export default Body;