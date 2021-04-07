import { ADD_NOTEPAD, ADD_NOTE_TO_NOTEPAD, DELETE_NOTEPAD } from "../types";

export const addNotpad = (notepad) => (dispatch) => {
  dispatch({
    type: ADD_NOTEPAD,
    payload: notepad,
  });
};

export const delNotpad = (id) => (dispatch) => {
  dispatch({
    type: DELETE_NOTEPAD,
    payload: id,
  });
};

export const addNoteToNotpad = (id, note) => (dispatch) => {
  dispatch({
    type: ADD_NOTE_TO_NOTEPAD,
    payload: {
      id,
      note,
    },
  });
};
