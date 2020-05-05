import {
  FETCH_FORECAST_FAILURE,
  FETCH_FORECAST_REQUEST,
  FETCH_FORECAST_SUCCESS
} from "../constants";

export const forecastReducer = (state: any = [], action: any) => {
  switch (action.type) {
    case FETCH_FORECAST_REQUEST:
      return [...state, { status: "requesting..." }];
    case FETCH_FORECAST_SUCCESS:
      return [...state, { status: "success", response: action.payload }].filter(
        el => el.status === "success"
      );
    case FETCH_FORECAST_FAILURE:
      return [...state, { status: "error", response: action.payload }].filter(
        el => el.status === "error"
      );
    default:
      return state;
  }
};
