import { BrowserRouter as Router,Routes, Route} from "react-router-dom"
import HomePage from "./home.jsx"
import LoginPage from "./login.jsx"
import RegisterPage from "./register.jsx";
import './App.css'


function App() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/register" element={<RegisterPage/>} />
            </Routes>
        </Router>
    );
}

export default App
