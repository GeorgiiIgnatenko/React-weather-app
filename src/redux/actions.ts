import {CHANGE_THEME} from "./actionTypes";

export function changeTheme(newTheme:string) {
    return{
        type: CHANGE_THEME,
        payload: newTheme
    }
}