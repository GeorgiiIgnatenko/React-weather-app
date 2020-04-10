import React from "react";
import { WeatherItem } from "../../../components/HomePage/WeatherItem";
import { connect } from "react-redux";
import { getRandomCity, hideLoader, showLoader } from "../../../redux/actions";
import {WeatherItemLoader} from "../../../components/HomePage/WeatherItemLoader";

class WeatherItemContainer extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.props.showLoader();
    this.props.getRandomCity(this.props.cityName);
  }

  componentDidMount(): void {
    console.log(this.props.loading);
    this.props.hideLoader();
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
          />
        ) : (
            <WeatherItemLoader/>
        )}
      </>
    );
  }
}

const mapDispatchToProps = {
  getRandomCity,
  showLoader,
  hideLoader
};

const mapStateToProps = (state: any, props: any) => {
  if (state.apiReducer[props.id]) {
    const { name } = state.apiReducer[props.id].response;
    const { main } = state.apiReducer[props.id].response.weather[0];
    const { temp, temp_min, temp_max } = state.apiReducer[props.id].response.main;
    return {
      cityTitle: name,
      weatherState: main,
      temperature: Math.round(temp),
      minTemp: Math.round(temp_min),
      maxTemp: Math.round(temp_max),
      loading: state.loaderReducer
    };
  } else {
    return {
      cityTitle: "",
      weatherState: "",
      temperature: null,
      minTemp: null,
      maxTemp: null,
      loading: state.loaderReducer
    };
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherItemContainer);
