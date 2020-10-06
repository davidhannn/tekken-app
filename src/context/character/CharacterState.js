import React, { useReducer } from "react";
import axios from "axios";
import CharacterContext from "./characterContext";
import CharacterReducer from "./characterReducer";

import { GET_CHARACTER, SEARCH_CHARACTERS, SET_LOADING } from "../types";

const CharacterState = (props) => {
  const initialState = {
    character: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(CharacterReducer, initialState);

  //   // Search Characters
  //   const searchUsers = async (text) => {
  //     setLoading();

  //     const res = await axios.get(
  //       `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
  //     );

  //     dispatch({
  //       type: SEARCH_CHARACTERS,
  //       payload: res.data.items,
  //     });
  //   };

  // Get Character Data
  const getCharacter = async (name) => {
    setLoading();

    const res = await axios.get(
      `http://tkn-api.herokuapp.com/character/${name}`
    );

    dispatch({
      type: GET_CHARACTER,
      payload: res.data,
    });
  };

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <CharacterContext.Provider
      value={{
        character: state.character,
        loading: state.loading,
        getCharacter,
        setLoading,
      }}
    >
      {props.children}
    </CharacterContext.Provider>
  );
};

export default CharacterState;
