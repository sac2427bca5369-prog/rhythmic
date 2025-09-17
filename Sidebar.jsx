import React from "react";
import { FaHome, FaHeart, FaList } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="logo">Music-Player</h2>
      <ul>
        <li>
          <Link to="/"><FaHome /> Home</Link>
        </li>
        <li>
          <Link to="/favorites"><FaHeart /> Favorites</Link>
        </li>
        <li>
          <Link to="/playlist"><FaList /> Playlist</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;