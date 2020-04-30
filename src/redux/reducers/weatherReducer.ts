import {
  FETCH_WEATHER_FAILURE,
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_SUCCESS
} from "../constants";

export const weatherReducer = (state: any = [], action: any) => {
  switch (action.type) {
    case FETCH_WEATHER_REQUEST:

      return [...state, { status: "requesting..."}];
    case FETCH_WEATHER_SUCCESS:
      const { name } = action.payload;
      const { speed } = action.payload.wind;
      const { main } = action.payload.weather[0];
      const {
        temp,
        temp_min,
        temp_max,
        feels_like,
        pressure,
        humidity
      } = action.payload.main;
      const response = {
        cityTitle: name,
        weatherState: main,
        humidity: humidity,
        pressure: pressure,
        windSpeed: Math.round(speed),
        temperature: Math.round(temp),
        minTemp: Math.round(temp_min),
        maxTemp: Math.round(temp_max),
        tempFeelsLike: Math.round(feels_like)
      };
      return [
        ...state,
        { status: "success", response: response}
      ].filter(el => el.status === "success");
    case FETCH_WEATHER_FAILURE:
      return [
        ...state,
        { status: "error", response: action.payload}
      ].filter(el => el.status === "error");
    default:
      return state;
  }
};
