import React, { useState } from "react";

function Pet({ pet, onAdoptPet }) {
  const { age, gender, id, isAdopted, name, type, weight } = pet;

  //const [adoptedStatus, setAdoptedStatus] = useState(isAdopted);

  //console.log("pet: ", pet);

  const handleAdoptPetClick = (id) => {
    //isAdopted = !isAdopted;
    onAdoptPet(id);
  };

  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {/*'♀' OR '♂' */}
          {gender === "male" ? "♀ " : "♂ "}
          {name}
        </span>
        <div className="meta">
          <span className="date">{type}</span>
        </div>
        <div className="description">
          <p>Age: {age}</p>
          <p>Weight: {weight}</p>
        </div>
      </div>
      <div className="extra content">
        {isAdopted ? (
          <button className="ui disabled button">Already adopted</button>
        ) : (
          <button
            className="ui primary button"
            onClick={() => handleAdoptPetClick(id)}
          >
            Adopt pet
          </button>
        )}
        {/* <button className="ui disabled button">Adopted</button>
        <button className="ui primary button">Adopt pet</button> */}
      </div>
    </div>
  );
}

export default Pet;
