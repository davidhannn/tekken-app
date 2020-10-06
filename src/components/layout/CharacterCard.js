import React from "react";
import { Link } from "react-router-dom";

const CharacterCard = ({ character: { name, label, description } }) => {
  return (
    <div className="characterCard" id={label}>
      <Link
        style={{
          color: "inherit",
          textDecoration: "inherit",
          backgroundColor: "none",
        }}
        to={`/character/${name}`}
      >
        <div className="character-name">{name.split("-").join(" ")}</div>
        <img
          className="character-thumbnail"
          src={`/images/${name.toLowerCase()}_thumbnail.png`}
          alt={name}
        />
      </Link>
    </div>
  );
};

export default CharacterCard;
