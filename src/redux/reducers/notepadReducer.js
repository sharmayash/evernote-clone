import { ADD_NOTEPAD, ADD_NOTE_TO_NOTEPAD, DELETE_NOTEPAD } from "../types";

const initialState = {
  notepads: [
    {
      id: 1,
      title: "Notebook 1",
      notes: [],
    },
  ],
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTEPAD:
      return {
        ...state,
        notepads: [action.payload, ...state.notepads],
      };
    case DELETE_NOTEPAD:
      return {
        ...state,
        notepads: state.notepads.filter(
          (notepad) => notepad.id !== action.payload
        ),
      };
    case ADD_NOTE_TO_NOTEPAD:
      return {
        ...state,
        notepads: state.notepads.map((notepad) =>
          notepad.id === action.payload.id
            ? {
                ...notepad,
                notes: [...notepad.notes, action.payload.note],
              }
            : notepad
        ),
      };
    default:
      return state;
  }
};

export default user;
