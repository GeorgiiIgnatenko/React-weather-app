import React from "react";
import "./Body.scss";
import WeatherList from "../WeatherList";
import { SearchBar } from "../SearchBar";

export const Body: React.FC = () => {
  return (
    <div className="app_body">
      <SearchBar />
      <WeatherList />
    </div>
  );
};

