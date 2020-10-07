import React, { useEffect, useContext, Fragment } from "react";
import CharacterContext from "../../context/character/characterContext";
import Spinner from "../layout/Spinner";

const Character = ({ match }) => {
  console.log(match.params.name);
  const characterContext = useContext(CharacterContext);

  const { character, getCharacter, loading } = characterContext;

  useEffect(() => {
    getCharacter(match.params.name);
  }, []);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <Fragment>
        <div className="character-header">
          <h2>{match.params.name}</h2>
          <img
            className="character-banner"
            src={`/images/${match.params.name.toLowerCase()}_thumbnail.png`}
          />
        </div>

        <table className="character-move-list">
          <thead>
            <tr>
              <th>Command</th>
              <th>Range</th>
              <th>Damage</th>
              <th>Startup</th>
              <th>Hit</th>
              <th>Block</th>
              <th>Counter</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {character.map((character) => (
              <tr>
                <td>{character.command}</td>
                <td>{character.hitRange}</td>
                <td>{character.damage}</td>
                <td>{character.startup}</td>
                <td>{character.hit}</td>
                <td>{character.block}</td>
                <td>{character.counterHit}</td>
                <td>{character.notes}</td>
              </tr>
            ))}
            {/* <tr>
              <td></td>
            </tr> */}
          </tbody>
        </table>
      </Fragment>
    );
  }
};

export default Character;
