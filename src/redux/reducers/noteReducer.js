import { GET_NOTES, ADD_NOTE } from "../types";

const initialState = {
  notes: [],
  activeNote: {},
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case GET_NOTES:
      return {
        ...state,
        notes: action.payload,
      };
    case ADD_NOTE:
      return {
        ...state,
        notes: [action.payload, ...state.notes],
      };
    default:
      return state;
  }
};

export default user;
