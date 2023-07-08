import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import NoteState from "./context/notes/NoteState";
import About from "./components/About";
import Login from "./components/Login";
import AuthState from "./context/auth/AuthState";

function App() {
    return (
        <>
            <BrowserRouter>
                <AuthState>
                    <NoteState>
                        <Login />
                        {/* <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                    </Routes> */}
                    </NoteState>
                </AuthState>
            </BrowserRouter>
        </>
    );
}

export default App;
