import React, { Link } from "react";

const CharacterCard = ({ character: { name, label, description } }) => {
  return (
    <div className="characterCard" id={label}>
      {name}
      <img
        className="character-thumbnail"
        src={`/images/${name.toLowerCase()}_thumbnail.png`}
        alt={name}
      />
    </div>
  );
};

export default CharacterCard;
