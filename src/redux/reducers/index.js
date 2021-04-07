import { combineReducers } from "redux";
import noteReducer from "./noteReducer";
import notepadReducer from "./notepadReducer";

export default combineReducers({
  note: noteReducer,
  notepad: notepadReducer,
});
