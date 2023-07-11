import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import NoteState from "./context/notes/NoteState";
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
                            {/* <Route path="/*" element={<div>Hello</div>} /> */}
                        </Routes>
                    </NoteState>
                </AuthState>
            </BrowserRouter>
        </>
    );
}

export default App;
