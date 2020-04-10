import {FETCH_WEATHER_FAILURE, FETCH_WEATHER_REQUEST, FETCH_WEATHER_SUCCESS} from "../constants";


export const apiReducer = (state:any = [], action:any) => {
    switch (action.type) {
        case FETCH_WEATHER_REQUEST:
            return [...state,{status: 'requesting...'}];
        case FETCH_WEATHER_SUCCESS:
            return [...state,{status: 'success',response: action.payload}].filter(el => el.status === "success");
        case FETCH_WEATHER_FAILURE:
            return [...state,{status:'error',response: action.payload}].filter(el => el.status === "error");
        default: return state;
    }
};