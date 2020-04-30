import React from "react";
import "./Forecast.scss";

import stormyIcon from "../../../images/cloud 1.svg";
import cloudyIcon from "../../../images/forecast 2.svg";
import rainyIcon from "../../../images/rain 1.svg";
import sunnyIcon from "../../../images/sun 1.svg";
import winterIcon from "../../../images/winter 1.svg";

interface PropsTypes {
  today: string;
  id: number;
  temp: number;
  weatherState: string;
}

export const ForecastItem = ({ today, id, temp, weatherState }: PropsTypes) => {
  function setDesc() {
    switch (weatherState) {
      case "Clouds":
        return "Облачно";
      case "Haze":
      case "Smoke":
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

  function setIcon() {
    switch (weatherState) {
      case "Clouds":
      case "Haze":
      case "Smoke":
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

  return (
    <div className="forecast__item" key={id}>
      <p className="forecast__item__date">
        {today.charAt(0).toUpperCase() + today.slice(1)}
      </p>
      <img src={setIcon()} alt="" className="forecast__item__icon" />
      <p className="forecast__item__temp">{temp}°</p>
      <p className="forecast__item__desc">{setDesc()}</p>
    </div>
  );
};
