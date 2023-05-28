import React from "react";
import { BrowserRouter,Routes, Route, Link } from "react-router-dom";
import Landing from "./pages/landing";

function App() {
  return (
    <BrowserRouter>
      <Landing/>
        <Routes>
            <Route path="/" element={<div>home</div>} />
            <Route path="landing" element={<Landing/>} />
            <Route path="*" element={<div>404</div>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App;
