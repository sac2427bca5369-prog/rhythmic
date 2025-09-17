import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Songs from "./Components/Songs";
import Favorites from "./Components/Favorities"; // ✅ fixed spelling
import Playlist from "./Components/Playlist";
import Search from "./Components/Search";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Sidebar always on the left */}
        <Sidebar />

        {/* Songs / other pages on the right */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Songs />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/playlist" element={<Playlist />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
