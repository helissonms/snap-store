import { combineReducers } from "redux";
import list from './list';
import show from './show';
import installing from './installing';
import removing from './removing';
import trackChange from './trackChange';

export default combineReducers({
  list,
  show,
  installing,
  removing,
  trackChange,
});
