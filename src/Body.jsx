import {Link} from "react-router";
import Products from "./Products.jsx";
import im from "./assets/react.svg"

function Body() {
    return (
        <>
        <div className="body">
            Mern Commerce is your Number One <span className="hub">HUB</span> in buying all things green!
            <Link className="sublink" to="/register"> Register </Link> and shop with us today to get a 70% discount off your first purchase!
            <hr/>
            <Products name="Mexican Gloves" price="#3892" image={im} description="Blue worlds"/>
            <Products name="Nigerian Gloves" price="#1402" image={im} description="Red worlds"/>
            <Products name="American Gloves" price="#5692" image={im} description="Green worlds"/>

            <div className="anim">🛼</div>
        </div>
        </>
    );
}


export default Body;