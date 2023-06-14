import React, { useState } from "react";

function ToyCard({ toy, onDeleteClick }) {
  const [likes, setLikes] = useState(toy.likes);

  function deleteToy() {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => onDeleteClick(toy));
  }

  function handleLikeClick() {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes: toy.likes++,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setLikes(data.likes); // Update the likes state with the new value
      });
  }

  return (
    <div className="card">
      <h2>{toy.name /* Toy's Name */}</h2>
      <img src={toy.image /* Toy's Image */} alt={toy.name /* Toy's Name */} className="toy-avatar" />
      <p>
        {likes} Likes {/* Display the updated likes value */}
      </p>
      <button className="like-btn" onClick={handleLikeClick}>
        Like {"<3"}
      </button>
      <button className="del-btn" onClick={deleteToy}>
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;
