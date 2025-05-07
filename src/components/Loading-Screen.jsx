import React from "react";
import "../stylesheets/LoadingScreen.css";

const LoadingScreen = () => {
    return (
        <div className="loading-screen">
            <div className="loading-frame">
                <div className="spinner"></div>
                <p className="loading-text">Welcome to Oakrigs Store. Loading Store...</p>
            </div>
        </div>
    );
};

export default LoadingScreen;
