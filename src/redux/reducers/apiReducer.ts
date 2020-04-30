import {combineReducers} from "redux";
import {forecastReducer} from "./forecastReducer";
import {weatherReducer} from "./weatherReducer";

export const apiReducer = combineReducers({
  forecastReducer,
  weatherReducer
});
