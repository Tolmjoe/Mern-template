import {Link} from "react-router";
import "./admin.css"


function Admin() {
    return(
        <>
    <Link className="registerRet" to="/">Go back to  userhomepage</Link>
    <div className="adm admBodyA">
        <h4>Manage Items</h4>
        <p>You can manage your items here</p>
        <form>
            <label className="lal" htmlFor="name">Input Name of Item</label>
            <input className="inp"/>
            <label className="lal" htmlFor="name">Input Category of Item</label>
            <select className="inp" id="category">
                <option value="">Select a Category</option>
                <option value="Electronics">Electronics</option>
                <option value="Clothes">Clothes</option>
                <option value="Toys">Toys</option>
            </select>
            <label className="lal" htmlFor="description">Input Description of Item</label>
            <textarea className="inp inp-txt"/>
            <label className="lal" htmlFor="price">Input Price of Item</label>
            <input className="inp"/>


            <button className="adminButton">Manage Items</button>
        </form>

    </div>
    <div className="adm admBodyB">
        <h4>Manage Orders</h4>
        <button className="adminButton">Manage Orders</button>
    </div>
    <div className="adm admBodyC">
        <h4>Manage Users</h4>
        <button className="adminButton">Manage Users</button>
    </div>

        </>
    )
}


export default Admin;