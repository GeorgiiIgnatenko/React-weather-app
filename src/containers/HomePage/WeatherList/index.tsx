import React from "react";
import { Spin } from "antd";
import "antd/es/spin";
import "./WeatherList.scss";
import WeatherItemContainer from "../WeatherItem";

export default function WeatherListContainer() {
  let cities = [
    "Сеул",
    "Лондон",
    "Токио",
    "Пекин",
    "Стамбул",
    "Пекин",
    "Шанхай",
    "Чунцин",
    "Берлин",
    "Москва",
    "Санкт-Петербург",
    "Новосибирск",
    "Воронеж",
    "Екатеринбург",
    "Омск",
    "Нижний Новгород",
    "Пермь",
    "Красноярск",
    "Челябинск",
    "Волгоград",
    "Уфа",
    "Ростов-на-Дону",
    "Самара",
    "Казань"
  ];

  function randomCity() {
    const cityId = Math.floor(Math.random() * cities.length);
    const city = cities[cityId];
    cities.splice(cityId, 1);
    return city;
  }

  return (
    <div className="weather_list">
      {[0, 1, 2].map(el => (
        <WeatherItemContainer
            key={el}
            id={el}
            cityName={randomCity()}
        />
      ))}
    </div>
  );
}
