import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import NoteState from "./context/notes/NoteState";
import About from "./components/About";

function App() {
    return (
        <>
            <BrowserRouter>
                <NoteState>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </NoteState>
            </BrowserRouter>
        </>
    );
}

export default App;
