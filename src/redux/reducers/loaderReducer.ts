import {HIDE_LOADER, SHOW_LOADER} from "../constants";

export const loaderReducer = (state:boolean = true,action:any) => {
    switch (action.type) {
        case SHOW_LOADER:
            return state = true;
        case HIDE_LOADER:
            return state = false;
        default: return state
    }
};