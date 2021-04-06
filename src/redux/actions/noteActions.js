import {
  ADD_NOTE,
  DELETE_NOTE,
  EDIT_NOTE,
  SET_ACTIVE_NOTE,
  STAR_NOTE,
} from "../types";

export const setActiveNote = (note) => (dispatch) => {
  dispatch({
    type: SET_ACTIVE_NOTE,
    payload: note,
  });
};

export const addNewNote = (note) => (dispatch) => {
  dispatch({
    type: ADD_NOTE,
    payload: note,
  });
};

export const editExistingNote = (note) => (dispatch) => {
  dispatch({
    type: EDIT_NOTE,
    payload: note,
  });
};

export const starNote = (id, isFav) => (dispatch) => {
  dispatch({
    type: STAR_NOTE,
    payload: {
      id,
      isFav,
    },
  });
};

export const deleteNote = (id) => (dispatch) => {
  dispatch({
    type: DELETE_NOTE,
    payload: id,
  });
};
