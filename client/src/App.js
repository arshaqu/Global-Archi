import React from "react";
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Login from "./Pages/Users/Login";
import Register from "./Pages/Users/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
