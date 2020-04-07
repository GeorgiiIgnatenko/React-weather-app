import React from "react";
import "./WeatherList.scss";
import WeatherItem  from "../WeatherItem";


export const WeatherList = () => (
      <div className="weather_list">
          <WeatherItem key={0} id={0} />
          <WeatherItem key={1} id={1}/>
          <WeatherItem key={2} id={2} />
      </div>
);
