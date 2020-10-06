import { GET_CHARACTER, SEARCH_CHARACTERS, SET_LOADING } from "../types";

export default (state, action) => {
  switch (action.type) {
    case SEARCH_CHARACTERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case GET_CHARACTER:
      return {
        ...state,
        character: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
