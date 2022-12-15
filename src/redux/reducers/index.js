import { combineReducers } from "redux";
import ufReducer from "./ufReducer";
import selectedStateReducer from "./selectedStateReducer";
import townStateReducer from "./townStateReducer";
import selectedTownReducer from "./selectedTownReducer";
import townDataReducer from "./townDataReducer";

const allReducers = combineReducers({
  fetchedUfs: ufReducer,
  selectedUf: selectedStateReducer,
  getStateTown: townStateReducer,
  selectedTown: selectedTownReducer,
  townData: townDataReducer,
});

export default allReducers;
