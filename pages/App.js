import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function App(){
    return(
        <div>
            <h1>
                Navbar
            </h1>
            <Routes>
                <Route path="/" element={<Media />} />
            </Routes>
        </div>
    );
}

export default App;