import {Link} from "react-router-dom";

function Footer(){
    return (
      <>
      <div className="footer">

          <Link className="footlink" to="/">Products and Services</Link>
          <Link className="footlink" to="/">Check discounted products</Link>
          <Link className="footlink" to="/">Job offers</Link>
          <br className="br"/>
           &copy; 2025. Mern Commerce
      </div>
      </>
    );
}

export default Footer;