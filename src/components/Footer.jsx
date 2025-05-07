import {Link} from "react-router-dom";
import Theme from "./Theme-togg.jsx"
import "../stylesheets/Footer.css"

function Footer(){
    return (
      <>
      <div className="footer">

          <Link className="footlink" to="/">Products and Services</Link>
          <Link className="footlink" to="/">Check discounted products</Link>
          <Link className="footlink" to="/">Job offers</Link>
          <Theme/>
          <br className="br"/>
           &copy; 2025. Oakrigs Store
      </div>
      </>
    );
}

export default Footer;