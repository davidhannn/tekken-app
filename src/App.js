import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.scss";

import CharacterCard from "./components/layout/CharacterCard";

// import CharacterSelect from "./components/layout/CharacterSelect";

function App() {
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
    <div className="App">
      <h1>Tekken 7 Frame Data App</h1>
      {/* <CharacterSelect characterList={characterList} /> */}
      <div className="character-table">
        {characterList.map((character) => (
          <CharacterCard character={character} />
        ))}
      </div>
    </div>
  );
}

export default App;
