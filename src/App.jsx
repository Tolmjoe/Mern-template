import { BrowserRouter as Router,Routes, Route} from "react-router-dom"
import HomePage from "./home.jsx"
import LoginPage from "./login.jsx"
import RegisterPage from "./register.jsx"
import Admin from "./admin.jsx"
import './App.css'


function App() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/register" element={<RegisterPage/>} />
                <Route path="/admin" element={<Admin/>} />
            </Routes>
        </Router>
    );
}

export default App
