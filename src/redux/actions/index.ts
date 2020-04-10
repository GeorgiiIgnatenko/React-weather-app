import {
    CHANGE_THEME,
    FETCH_WEATHER_FAILURE,
    FETCH_WEATHER_REQUEST,
    FETCH_WEATHER_SUCCESS,
    HIDE_LOADER,
    SHOW_LOADER
} from "../constants";

export function getRandomCity(cityName: string) {
  return function(dispatch: any) {
    const apiKey = "bc7ba623f7cf19185a5332182b02e3cb";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric&lang=ru`;

    dispatch({
      type: FETCH_WEATHER_REQUEST
    });

    fetch(url)
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

export function changeTheme(newTheme: string) {
  return {
    type: CHANGE_THEME,
    payload: newTheme
  };
}

export function showLoader(){
    return{
        type: SHOW_LOADER
    }
}

export function hideLoader(){
    return{
        type: HIDE_LOADER
    }
}