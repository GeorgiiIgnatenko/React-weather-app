import React from "react";
import { Link } from "react-router-dom";
import "./WeatherItem.scss";

import { connect } from "react-redux";
import { getRandomCity } from "../../../../redux/actions";

import stormyIcon from "../../../../images/cloud 1.svg";
import cloudyIcon from "../../../../images/forecast 2.svg";
import rainyIcon from "../../../../images/rain 1.svg";
import sunnyIcon from "../../../../images/sun 1.svg";
import winterIcon from "../../../../images/winter 1.svg";

class WeatherItem extends React.Component<any, any> {
    componentDidMount(): void {
        this.props.getRandomCity();
    }

    setIcon (){
        switch (this.props.weatherState) {
            case 'Clouds':
                return cloudyIcon;
            case 'Rain' || 'Drizzle':
                return rainyIcon;
            case 'Thunderstorm':
                return stormyIcon;
            case 'Snow':
                return winterIcon;
            case 'Clear':
                return sunnyIcon;
        }
    }

    setDesc(){
        switch (this.props.weatherState) {
            case 'Clouds':
                return "Облачно";
            case 'Rain' || 'Drizzle':
                return 'Дождь';
            case 'Thunderstorm':
                return "Гроза";
            case 'Snow':
                return "Снег";
            case 'Clear':
                return "Ясно";
        }
    }

    render() {
    return (
      <Link className="weather_item" to="/details-page">
        <p className="weather_item__title">{this.props.cityTitle}</p>
        <img className="weather_item__image" src={this.setIcon()} alt="" />
        <div className="weather_item__desc">
          <div className="weather_item__short_info">
            <p>{this.props.temperature}°</p>
            <span>{this.setDesc()}</span>
          </div>
          <div className="weather_item__temps">
            <div className="weather_item__min_temp">
              <p>Мин</p>
              <span>{this.props.minTemp}°</span>
            </div>
            <div className="weather_item__max_temp">
              <p>Макс</p>
              <span>{this.props.maxTemp}°</span>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}
const mapDispatchToProps = {
    getRandomCity
};
const mapStateToProps = (state:any) => {
    if (state.apiReducer.status === 'success'){
    return{
        cityTitle: state.apiReducer.response.city.name,
        weatherState: state.apiReducer.response.list[4].weather[0].main,
        temperature: state.apiReducer.response.list[4].main.temp.toFixed(1),
        minTemp: state.apiReducer.response.list[4].main.temp_min.toFixed(1),
        maxTemp: state.apiReducer.response.list[4].main.temp_max.toFixed(1),
    }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(WeatherItem);