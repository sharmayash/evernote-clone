import { GET_NOTEPADS, ADD_NOTEPAD } from "../types";

const initialState = {
  notepads: [],
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case GET_NOTEPADS:
      return {
        ...state,
        notes: action.payload,
      };
    case ADD_NOTEPAD:
      return {
        ...state,
        notes: [action.payload, ...state.notes],
      };
    default:
      return state;
  }
};

export default user;
