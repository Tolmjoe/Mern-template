import { BrowserRouter as Router,Routes, Route} from "react-router-dom"
import HomePage from "./pages/home.jsx"
import LoginPage from "./pages/login.jsx"
import RegisterPage from "./pages/register.jsx"
import Admin from "./pages/admin.jsx"
import Prodall from "./components/Prodall-page.jsx"
import './stylesheets/App.css'


function App() {
    if(localStorage.getItem("theme") === "dark"){
        document.body.classList.add("dark")
    }
    return(
        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/register" element={<RegisterPage/>} />
                <Route path="/admin" element={<Admin/>} />
                <Route path="/product/:id" element={<Prodall/>}/>

            </Routes>
        </Router>
    );
}

export default App
