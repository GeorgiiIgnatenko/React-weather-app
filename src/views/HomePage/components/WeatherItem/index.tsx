import React from "react";
import "./WeatherItem.scss";
import stormyIcon from "../../../../images/cloud 1.svg";
import cloudyIcon from "../../../../images/forecast 2.svg";
import rainyIcon from "../../../../images/rain 1.svg";
import sunnyIcon from "../../../../images/sun 1.svg";
import winterIcon from "../../../../images/winter 1.svg";

export const WeatherItem: React.FC = () => {
  return (
    <div className="weather_item">
      <p className="weather_item__title">Новосибирск</p>
      <img className="weather_item__image" src={stormyIcon} alt="" />
      <div className="weather_item__desc">
        <div className="weather_item__short_info">
          <p>20°</p>
          <span>Облачно</span>
        </div>
        <div className="weather_item__temps">
          <div className="weather_item__min_temp">
            <p>Мин</p>
            <span>34°</span>
          </div>
          <div className="weather_item__max_temp">
            <p>Макс</p>
            <span>34°</span>
          </div>
        </div>
      </div>
    </div>
  );
};