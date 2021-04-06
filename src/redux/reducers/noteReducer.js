import {
  ADD_NOTE,
  DELETE_NOTE,
  EDIT_NOTE,
  SET_ACTIVE_NOTE,
  STAR_NOTE,
} from "../types";

const initialState = {
  notes: [],
  activeNote: null,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        activeNote: action.payload,
        notes: [action.payload, ...state.notes],
      };
    case EDIT_NOTE:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload.id ? action.payload : note
        ),
        activeNote: action.payload,
      };
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload),
      };
    case STAR_NOTE:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload.id
            ? {
                ...note,
                isFav: !action.payload.isFav,
              }
            : note
        ),
      };
    case SET_ACTIVE_NOTE:
      return {
        ...state,
        activeNote: action.payload,
      };
    default:
      return state;
  }
};

export default user;
