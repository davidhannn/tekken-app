import React, { useEffect, useState, Fragment } from "react";
import CharacterCard from "../layout/CharacterCard";
import axios from "axios";

const Home = () => {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://tkn-api.herokuapp.com/character");
      setCharacterList(result.data);
    };

    fetchData();
  }, []);

  return (
    <Fragment>
      <div className="logo-container">
        <img className="tekken-logo" src={`/images/logo.png`} />
        <h1>Frame Data</h1>
      </div>

      <div className="character-table">
        {characterList.map((character, i) => (
          <CharacterCard character={character} key={i} />
        ))}
      </div>
    </Fragment>
  );
};

export default Home;
