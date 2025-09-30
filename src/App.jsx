import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Oferta from "./pages/Oferta"
import Kontakt from "./pages/Kontakt"
import Login from "./pages/Login.jsx"
import Register from "./pages/Register.jsx";

function App() {
    return (
        <div>
            <Navbar />
            <main style={{ padding: "20px" }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Oferta" element={<Oferta />} />
                    <Route path="/Kontakt" element={<Kontakt />} />
                    <Route path="/Register" element={<Register />} />
                    <Route path="/Login" element={<Login />} />
                </Routes>
            </main>
        </div>
    )
}

export default App
