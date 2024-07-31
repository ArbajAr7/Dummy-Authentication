import React from "react";
import Login from "./components/Login.js";
import Profile from "./components/Profile.js";
import { Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {

    return (
        <div>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </div>    
    )
}

export default App;