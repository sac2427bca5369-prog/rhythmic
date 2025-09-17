import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import "./sidebar.css";

function Songs() {
  const [wishlist, setWishlist] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const items = [
    {
      id: 1,
      title: "Bol Do Na Zara",
      singer: "Armaan Malik",
      genre: "Romantic",
      imgUrl:
        "https://c.saavncdn.com/709/Bol-Do-Na-Zara-Instrumental-Hindi-2018-20181221231527-500x500.jpg",
      songUrl: "/Songs/Bol Do Na Zara.mp3",
    },
    {
      id: 2,
      title: "Chaleya",
      singer: "Arijit Singh",
      genre: "Romantic",
      imgUrl:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202309/chaleya-song-141618193-1x1.jpg",
      songUrl: "/Songs/chaleya.mp3",
    },
    {
      id: 3,
      title: "Humnava Mere",
      singer: "Jubin Nautiyal",
      genre: "Romantic",
      imgUrl:
        "https://c.saavncdn.com/259/Humnava-Mere-Hindi-2018-20180522-500x500.jpg",
      songUrl: "/Songs/Humnava Mere.mp3",
    },
    {
      id: 4,
      title: "Saari Duniya Jalaa Denge",
      singer: "B Praak",
      genre: "Emotional",
      imgUrl:
        "https://c.saavncdn.com/842/Saari-Duniya-Jalaa-Denge-Hindi-2023-20230210161038-500x500.jpg",
      songUrl: "/Songs/Saari Duniya Jalaa Denge.mp3",
    },
  ];

  const filteredItems = items.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.singer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.genre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="songs-page">
      {/* Header */}
      <h2 className="songs-header">Songs List</h2>

      {/* Search bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by singer, genre, or song name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Songs Grid */}
      <div className="songs-list">
        {filteredItems.map((item) => (
          <div key={item.id} className="song-card">
            <img src={item.imgUrl} alt={item.title} className="song-cover" />
            <h4>{item.title}</h4>
            <p>Genre: {item.genre}</p>
            <p>Singer: {item.singer}</p>

            <audio controls src={item.songUrl}></audio>

            <div className="card-actions">
              <button
                className="wishlist-btn"
                onClick={() =>
                  setWishlist((prev) =>
                    prev.includes(item.id)
                      ? prev.filter((id) => id !== item.id)
                      : [...prev, item.id]
                  )
                }
              >
                {wishlist.includes(item.id) ? (
                  <FaHeart color="red" />
                ) : (
                  <FaRegHeart />
                )}
              </button>

              <button className="playlist-btn">Add to Playlist</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Songs;