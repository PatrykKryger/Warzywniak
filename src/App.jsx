import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Oferta from "./pages/Oferta"
import Kontakt from "./pages/Kontakt"

function App() {
    return (
        <div>
            <Navbar />
            <main style={{ padding: "20px" }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/oferta" element={<Oferta />} />
                    <Route path="/kontakt" element={<Kontakt />} />
                </Routes>
            </main>
        </div>
    )
}

export default App
