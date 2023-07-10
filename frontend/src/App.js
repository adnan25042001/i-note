import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import NoteState from "./context/notes/NoteState";
import About from "./components/About";
import Login from "./components/Login";
import AuthState from "./context/auth/AuthState";
import Signup from "./components/Signup";

function App() {
    return (
        <>
            <BrowserRouter>
                <AuthState>
                    <NoteState>
                        <Routes>
                            <Route path="/login" element={<Login />} />
                            <Route path="/signup" element={<Signup />} />
                            <Route
                                path="/"
                                element={
                                    <>
                                        <Navbar />
                                        <Home />
                                    </>
                                }
                            />
                            <Route
                                path="/about"
                                element={
                                    <>
                                        <Navbar />
                                        <About />
                                    </>
                                }
                            />
                        </Routes>
                    </NoteState>
                </AuthState>
            </BrowserRouter>
        </>
    );
}

export default App;
