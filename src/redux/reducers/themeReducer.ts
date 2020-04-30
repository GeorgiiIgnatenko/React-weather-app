import {CHANGE_THEME} from "../constants";

export const themeReducer = (state:any = 'dark',action:any) => {
    if (action.type === CHANGE_THEME){
        return action.payload
    }
    return state
};