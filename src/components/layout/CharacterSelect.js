import React from "react";
import CharacterCard from "./CharacterCard";

const CharacterSelect = (characterList) => {
  console.log(characterList);
  return (
    <div className="character-table">
      {characterList &&
        characterList.map((character) => {
          console.log(character);
        })}
    </div>
  );
};

export default CharacterSelect;
