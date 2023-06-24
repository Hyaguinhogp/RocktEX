import { combineReducers, createStore } from "redux";
import dropDownReducer from "./modules/dropDown/reducer";

const reducers = combineReducers({ dropDown: dropDownReducer });

const store = createStore(reducers);

export default store;