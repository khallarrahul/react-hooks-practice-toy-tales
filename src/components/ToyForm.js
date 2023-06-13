import React, { useState } from "react";

function ToyForm({ onPostToys }) {
  const [toyData, setToyData] = useState({
    name: "",
    image: "",
    likes: 0,
  });
  function postToys(e) {
    e.preventDefault();
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: toyData.name,
        image: toyData.image,
        likes: parseInt(toyData.likes),
      }),
    })
      .then((res) => res.json())
      .then((data) => onPostToys(data));

    setToyData({ ...toyData, name: "", image: "" });
  }

  function handleToyChange(e) {
    setToyData({
      ...toyData,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={postToys}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={handleToyChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={handleToyChange}
        />
        <br />
        <input type="submit" name="submit" value="Create New Toy" className="submit" />
      </form>
    </div>
  );
}

export default ToyForm;
