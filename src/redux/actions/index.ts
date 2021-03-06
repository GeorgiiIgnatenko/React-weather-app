import {
  CHANGE_THEME,
  FETCH_FORECAST_FAILURE,
  FETCH_FORECAST_REQUEST,
  FETCH_FORECAST_SUCCESS,
  FETCH_WEATHER_FAILURE,
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_SUCCESS,
  HIDE_LOADER,
  SHOW_LOADER
} from "../constants";

const apiKey = "bc7ba623f7cf19185a5332182b02e3cb";

export function getWeather(cityName: string) {
  return function(dispatch: any) {
    const url: string = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric&lang=ru`;

    dispatch({
      type: FETCH_WEATHER_REQUEST
    });

    return fetch(url)
      .then(res => res.json())
      .then(data =>
        dispatch({
          type: FETCH_WEATHER_SUCCESS,
          payload: data
        })
      )
      .catch(error =>
        dispatch({
          type: FETCH_WEATHER_FAILURE,
          payload: error.message
        })
      );
  };
}

export function getForecast(city: string) {
  return function(dispatch: any) {
    const url: string = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&lang=ru`;

    dispatch({
      type: FETCH_FORECAST_REQUEST
    });

    return fetch(url)
      .then(res => res.json())
      .then(data =>
        dispatch({
          type: FETCH_FORECAST_SUCCESS,
          payload: data
        })
      )
      .catch(error => {
        dispatch({
          type: FETCH_FORECAST_FAILURE,
          payload: error.message
        });
      });
  };
}

export function changeTheme(newTheme: string) {
  return {
    type: CHANGE_THEME,
    payload: newTheme
  };
}

export function showLoader() {
  return {
    type: SHOW_LOADER
  };
}

export function hideLoader() {
  return {
    type: HIDE_LOADER
  };
}
