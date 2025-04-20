import {Link} from "react-router";
import { useState } from "react";
import "../stylesheets/admin.css"


function Admin() {

    const [users] = useState([
        { id: 1, name: "Emmanuel Tommy", email: "emmatom@gmail.com", role: "Customer" },
        { id: 2, name: "Undertaker Chap", email: "undertaker@gmail.com", role: "Seller" },
        { id: 3, name: "Femi Abitogun", email: "abitogun@gmail.com", role: "Admin" },
    ]);
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


            <button className="adminButton">Add Item</button>
        </form>

    </div>
    <div className="adm admBodyB">
        <h4>Manage Orders</h4>
        <button className="adminButton">Manage Orders</button>
    </div>
            <div className="adm admBodyC">
                <h4>Manage Users</h4>
                <input type="text" placeholder="Search users..." className="inp userSearch" />

                <div className="userBack">
                    <table className="user">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>
                                    <button className="tableBtn view">View</button>
                                    <button className="tableBtn edit">Edit</button>
                                    <button className="tableBtn delete">Delete</button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}


export default Admin;