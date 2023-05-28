import React from "react";
import { BrowserRouter,Routes, Route, Link } from "react-router-dom";
import Landing from "./pages/Landing";
import Error from "./pages/Error";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="landing" element={<Landing/>} />
            <Route path="register" element={<Register/>} />
            <Route path="*" element={<Error/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App;
