import { Link } from "react-router";
import Products from "../components/Products.jsx";
import Header from "../components/Header.jsx";


function Body() {
    return (
        <>

            <div className="">


                <div className="header">
                    <Header />
                </div>

                <p className="intro">Your Number One <span className="hub">HUB</span> in buying all things green!
                    <Link className="sublink" to="/register">Register</Link> and shop with us today.
                </p>

            </div>





            <Products />


        </>
    );
}


export default Body;