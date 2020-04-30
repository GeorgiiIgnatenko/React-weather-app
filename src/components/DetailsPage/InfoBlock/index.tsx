import React from "react";
import "./InfoBlock.scss";

import moment from "moment";

import stormyIcon from "../../../images/cloud 1.svg";
import cloudyIcon from "../../../images/forecast 2.svg";
import rainyIcon from "../../../images/rain 1.svg";
import sunnyIcon from "../../../images/sun 1.svg";
import winterIcon from "../../../images/winter 1.svg";
import WeatherProps from "../../../types/home";

interface WeatherTypes extends WeatherProps {
  city: string;
  pressure: number;
  humidity: number;
  windSpeed: number;
  tempFeelsLike: number;
}

export const InfoBlock = ({
  city,
  pressure,
  humidity,
  windSpeed,
  weatherState,
  maxTemp,
  minTemp,
  temperature,
  tempFeelsLike
}: WeatherTypes) => {

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

  return (
    <div className="info_block">
      <p className="info_block__title">{city}</p>
      <p className="info_block__time">Сейчас: {moment().format('HH:mm')}</p>
      <div className="info_block__weather_state">
        <object
          className="info_block__weather_state__icon"
          data={setIcon()}
          type="image/svg+xml"
        >
          I
        </object>
        <div className="info_block__weather_state__desc">
          <div className="info_block__weather_state__desc__temp">
            <p>Температура: {temperature}°</p>
            <span>Ощущается как: {tempFeelsLike}°</span>
          </div>
          <p className="info_block__weather_state__desc__clouds">
            {setDesc()}
          </p>
          <p className="info_block__weather_state__desc__pressure">
            Давление: {pressure}
          </p>
          <p className="info_block__weather_state__desc__humidity">
            Влажность: {humidity}%
          </p>
          <p className="info_block__weather_state__desc__wind">
            Ветер: {windSpeed}М/C
          </p>
        </div>
      </div>
    </div>
  );
};
