import React from "react";
import { BrowserRouter,Routes, Route, Link } from "react-router-dom";
import Landing from "./pages/landing";

function App() {
  return (
    <BrowserRouter>
      <Landing/>
        <Routes>
            <Route path="/" element={<Landing/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App;
