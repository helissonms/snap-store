import { combineReducers } from "redux";
import list from './list';
import show from './show';
import installing from './installing';

export default combineReducers({
  list,
  show,
  installing,
});
