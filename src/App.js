import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Prueba from "./pages/prueba";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Prueba />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
