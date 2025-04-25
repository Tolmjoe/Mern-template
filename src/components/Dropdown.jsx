import React, { useState } from "react";
import "../stylesheets/dropdown.css";

const Drop = () => {
    const [open, setOpen] = useState(false);

    const toggleDrop = () => {
        setOpen(!open);
    };

    return (
        <div className="drop-wrapper">
            <button className="drop-toggle" onClick={toggleDrop}>
                {open ? <span className="togclose">&#x2692;</span> : <span className="togopen">&#x2631;</span>}
            </button>

            <div className={`drop-menu ${open ? "open" : ""}`}>
                <div className="drop-back">
                    <div className="drop-section">
                        <h2>Users</h2>
                        <ul>
                            <li>Wishlist</li>
                            <li>Orders</li>
                            <li>Cart</li>
                            <li>Starred Items</li>
                            <li>Account Settings</li>
                        </ul>
                    </div>

                    <div className="drop-section">
                        <h2>Categories</h2>
                        <ul>
                            <li>Phones & Tablets</li>
                            <li>Electronics</li>
                            <li>Fashion</li>
                            <li>Toys</li>
                            <li>Automobile</li>
                            <li>Crystals</li>
                            <li>Fruits</li>
                        </ul>
                    </div>

                    <div className="drop-section">
                        <h2>Services</h2>
                        <ul>
                            <li>Customer Support</li>
                            <li>Download Mobile App</li>
                            <li>Oakrig Bank</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Drop;
