import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onDeleteClick }) {
  const toyMap = toys.map((toy) => <ToyCard key={toy.id} toy={toy} onDeleteClick={onDeleteClick} />);

  return (
    <>
      <div id="toy-collection">{toyMap}</div>
    </>
  );
}

export default ToyContainer;
