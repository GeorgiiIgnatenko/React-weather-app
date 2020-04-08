import React from "react";
import "./WeatherList.scss";
import WeatherItem  from "../WeatherItem";


export const WeatherList:React.FC = ()=> (
      <div className="weather_list">
          {[0,1,2].map(el => <WeatherItem key={el} id={el}/>)}
      </div>
);

