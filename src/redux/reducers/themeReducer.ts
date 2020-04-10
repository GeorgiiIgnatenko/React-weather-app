import {CHANGE_THEME} from "../constants";

export const themeReducer = (state:any = {theme: 'dark'},action:any) => {
    if (action.type === CHANGE_THEME){
        return {theme: action.payload}
    }
    return state
};