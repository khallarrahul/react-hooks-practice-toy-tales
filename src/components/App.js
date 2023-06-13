import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function addPostedToy(newToy) {
    setToys([...toys, newToy]);
  }

  function handleDeleteClick(deletedToy) {
    const afterDeletedToys = toys.filter((toy) => toy.id !== deletedToy.id);
    setToys(afterDeletedToys);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onPostToys={addPostedToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} onDeleteClick={handleDeleteClick} />
    </>
  );
}

export default App;
