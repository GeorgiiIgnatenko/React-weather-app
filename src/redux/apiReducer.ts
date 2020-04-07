import {FETCH_WEATHER_FAILURE, FETCH_WEATHER_REQUEST, FETCH_WEATHER_SUCCESS} from "./actionTypes";

const initState:object = {
    status: '',
    response: null
};


export const apiReducer = (state:any = initState, action:any) => {
    switch (action.type) {
        case FETCH_WEATHER_REQUEST:
            return {...state,status: 'requesting...'};
        case FETCH_WEATHER_SUCCESS:
                return {...state,status: 'success',response: action.payload};
        case FETCH_WEATHER_FAILURE:
            return {...state,status:'Error',response: action.payload};
        default: return state;
    }
};