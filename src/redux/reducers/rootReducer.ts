import {combineReducers} from "redux";
import {apiReducer} from "./apiReducer";
import {themeReducer} from "./themeReducer";
import {loaderReducer} from "./loaderReducer";


export const rootReducer = combineReducers({
    apiReducer,
    themeReducer,
    loaderReducer
});