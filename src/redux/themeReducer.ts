import {CHANGE_THEME} from "./actionTypes";

export const themeReducer = (state:any = {theme: 'dark'},action:any) => {
    if (action.type === CHANGE_THEME){
        return {theme: action.payload}
    }
    return state
};