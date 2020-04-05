import {combineReducers} from "redux";
import {apiReducer} from "./apiReducer";
import {themeReducer} from "./themeReducer";

export const rootReducer = combineReducers({
    apiReducer,
    themeReducer
});