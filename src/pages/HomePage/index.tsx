import React from "react";
import './HomePage.scss';
import SearchBarContainer from "../../containers/HomePage/SearchBar";
import WeatherListContainer from "../../containers/HomePage/WeatherList";

export const HomePage = () => {
    return(
        <div className="home_page">
            <SearchBarContainer/>
            <WeatherListContainer/>
        </div>
    )
};