import React from "react";

function ToyCard({ toy, onDeleteClick }) {
  function deleteToy() {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => onDeleteClick(toy));
  }
  return (
    <div className="card">
      <h2>{toy.name /* Toy's Name */}</h2>
      <img src={toy.image /* Toy's Image */} alt={toy.name /* Toy's Name */} className="toy-avatar" />
      <p>{toy.likes /* Toy's Likes */} Likes </p>
      <button className="like-btn">Like {"<3"}</button>
      <button className="del-btn" onClick={deleteToy}>
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;
