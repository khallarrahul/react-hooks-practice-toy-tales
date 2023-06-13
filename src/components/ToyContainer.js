import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys }) {
  const toyMap = toys.map((toy) => <ToyCard key={toy.id} toy={toy} />);

  return (
    <>
      <div id="toy-collection">{toyMap}</div>
    </>
  );
}

export default ToyContainer;
