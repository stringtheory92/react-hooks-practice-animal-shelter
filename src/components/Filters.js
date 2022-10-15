import React from "react";

function Filters({ onChangeType, onFindPetsClick }) {
  const handleSelection = (e) => {
    onChangeType(e.target.value);
  };

  const handleFindPetsClick = (e) => {
    onFindPetsClick(e);
  };

  return (
    <div className="ui form">
      <h3>Animal type</h3>
      <div className="field">
        <select
          name="type"
          id="type"
          aria-label="type"
          onChange={handleSelection}
          //onChange={onChangeType}
        >
          <option value="all">All</option>
          <option value="cat">Cats</option>
          <option value="dog">Dogs</option>
          <option value="micropig">Micropigs</option>
        </select>
      </div>

      <div className="field">
        <button
          className="ui secondary button"
          onClick={handleFindPetsClick}
          // onClick={onFindPetsClick}
        >
          Find pets
        </button>
      </div>
    </div>
  );
}

export default Filters;
