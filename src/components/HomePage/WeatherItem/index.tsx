import React from "react";
import { Link } from "react-router-dom";
import "./WeatherItem.scss";
import WeatherProps from "../../../types/home";

import stormyIcon from "../../../images/cloud 1.svg";
import cloudyIcon from "../../../images/forecast 2.svg";
import rainyIcon from "../../../images/rain 1.svg";
import sunnyIcon from "../../../images/sun 1.svg";
import winterIcon from "../../../images/winter 1.svg";


export const WeatherItem = ({
  weatherState,
  cityTitle,
  temperature,
  minTemp,
  maxTemp
}: WeatherProps) => {

  function setIcon() {
    switch (weatherState) {
      case "Clouds":
      case "Haze":
      case "Mist":
        return cloudyIcon;
      case "Rain":
      case "Drizzle":
        return rainyIcon;
      case "Thunderstorm":
        return stormyIcon;
      case "Snow":
        return winterIcon;
      case "Clear":
        return sunnyIcon;
    }
  }

  function setDesc() {
    switch (weatherState) {
      case "Clouds":
        return "Облачно";
      case "Haze":
        return "Дымка";
      case "Mist":
        return "Туман";
      case "Rain":
      case "Drizzle":
        return "Дождь";
      case "Thunderstorm":
        return "Гроза";
      case "Snow":
        return "Снег";
      case "Clear":
        return "Ясно";
    }
  }

  return (
    <Link className="weather_item" to="/details-page">
      <p className="weather_item__title">{cityTitle}</p>
      <img className="weather_item__image" src={setIcon()} alt="" />
      <div className="weather_item__desc">
        <div className="weather_item__short_info">
          <p>{temperature}°</p>
          <span>{setDesc()}</span>
        </div>
        <div className="weather_item__temps">
          <div className="weather_item__min_temp">
            <p>Мин</p>
            <span>{minTemp}°</span>
          </div>
          <div className="weather_item__max_temp">
            <p>Макс</p>
            <span>{maxTemp}°</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
