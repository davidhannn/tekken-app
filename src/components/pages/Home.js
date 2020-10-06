import React, { useEffect, useState, Fragment } from "react";
import CharacterCard from "../layout/CharacterCard";
import axios from "axios";

const Home = () => {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://tkn-api.herokuapp.com/character");
      setCharacterList(result.data);
    };

    fetchData();
  }, []);

  console.log(characterList);

  return (
    <Fragment>
      <h1>Tekken 7 Frame Data App</h1>
      <div className="character-table">
        {characterList.map((character) => (
          <CharacterCard character={character} />
        ))}
      </div>
    </Fragment>
  );
};

export default Home;
