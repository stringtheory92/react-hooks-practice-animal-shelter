import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  const onChangeType = (selection) => {
    console.log("App onChangeType ", selection);
    setFilters({ type: selection });
  };

  const onFindPetsClick = (e) => {
    console.log("App onFindPetsClick");
    const dataUrlEndpoint =
      filters.type === "all" ? "" : `?type=${filters.type}`;
    fetch(`http://localhost:3001/pets${dataUrlEndpoint}`)
      .then((res) => res.json())
      .then((data) => setPets(data));
  };

  const onAdoptPet = (id) => {
    console.log("App onAdoptPet");
    // const currentPet = pets.filter((pet) => {
    //   return pet.id === id;
    // })[0];
    // console.log("currentPet", currentPet);
    // const updatedPet = { ...currentPet, isAdopted: true };
    // setPets([...pets, updatedPet]);
    const updatedPets = pets.map((pet) => {
      if (pet.id === id) return { ...pet, isAdopted: true };
      return pet;
    });
    setPets(updatedPets);
  };

  console.log("pets: ", pets);

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters
              onChangeType={onChangeType}
              onFindPetsClick={onFindPetsClick}
            />
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={onAdoptPet} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
