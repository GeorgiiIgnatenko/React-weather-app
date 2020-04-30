import React from "react";
import { connect } from "react-redux";
import { WeatherItem } from "../../../components/HomePage/WeatherItem";
import { WeatherItemLoader } from "../../../components/HomePage/WeatherItemLoader";
import { getWeather, hideLoader, showLoader } from "../../../redux/actions";

class WeatherItemContainer extends React.Component<any, any> {
  componentDidMount(): void {
    if (this.props.loading) {
      this.props.getWeather(this.props.cityName);
      this.props.hideLoader();
    }
  }

  render(): React.ReactNode {
    return (
      <>
        {!this.props.loading ? (
          <WeatherItem
            weatherState={this.props.weatherState}
            cityTitle={this.props.cityTitle}
            temperature={this.props.temperature}
            minTemp={this.props.minTemp}
            maxTemp={this.props.maxTemp}
            id={this.props.id}
          />
        ) : (
          <WeatherItemLoader />
        )}
      </>
    );
  }
}

const mapDispatchToProps = {
  getWeather,
  showLoader,
  hideLoader
};

const mapStateToProps = (state: any, props: any) => {
  if (
    state.apiReducer.weatherReducer[props.id] &&
    state.apiReducer.weatherReducer[props.id].status === "success"
  ) {
    const {cityTitle,weatherState,humidity,pressure,windSpeed,temperature,minTemp,maxTemp,tempFeelsLike} = state.apiReducer.weatherReducer[props.id].response;
    return {
      cityTitle: cityTitle,
      weatherState: weatherState,
      humidity: humidity,
      pressure: pressure,
      windSpeed: windSpeed,
      temperature: temperature,
      minTemp: minTemp,
      maxTemp: maxTemp,
      loading: state.loaderReducer
    };

    // return {
    //   cityTitle: name,
    //   weatherState: main,
    //   temperature: Math.round(temp),
    //   minTemp: Math.round(temp_min),
    //   maxTemp: Math.round(temp_max),
    //   loading: state.loaderReducer
    // };
  } else {
    return {
      loading: true
    };
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherItemContainer);
