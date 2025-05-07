import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import HomePage from "./pages/home.jsx";
import LoginPage from "./pages/login.jsx";
import RegisterPage from "./pages/register.jsx";
import Admin from "./pages/admin.jsx";
import Prodall from "./components/Prodall-page.jsx";
import LoadingScreen from "./components/Loading-Screen.jsx";

import './stylesheets/App.css';

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const theme = localStorage.getItem("theme");
        if (theme === "dark") {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }

        const handleLoad = () => {
            setLoading(false);
        };

        if (document.readyState === "complete") {
            handleLoad();
        } else {
            window.addEventListener("load", handleLoad);
            return () => window.removeEventListener("load", handleLoad);
        }
    }, []);

    if (loading) {
        return <LoadingScreen />;
    }

    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/product/:id" element={<Prodall />} />
            </Routes>
        </Router>
    );
}

export default App;
