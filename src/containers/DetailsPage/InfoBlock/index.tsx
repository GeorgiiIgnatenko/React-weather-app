import React from "react";
import { InfoBlock } from "../../../components/DetailsPage/InfoBlock";
import { connect } from "react-redux";
import { getWeather } from "../../../redux/actions";

interface PropsTypes {
  city: string;
  id: number;
}

class InfoBlockContainer extends React.Component<any, PropsTypes> {
  componentDidMount(): void {
      if (!this.props.weatherState){
          this.props.getWeather(this.props.city);
      }
  }

  render(): React.ReactNode {
    return (
      <>
        <InfoBlock
          city={this.props.city}
          pressure={this.props.pressure}
          humidity={this.props.humidity}
          windSpeed={this.props.windSpeed}
          weatherState={this.props.weatherState}
          maxTemp={this.props.maxTemp}
          minTemp={this.props.minTemp}
          temperature={this.props.temperature}
          tempFeelsLike={this.props.tempFeelsLike}
        />
      </>
    );
  }
}

const mapStateToProps = (state: any,props:any) => {
  if (state.apiReducer.weatherReducer[props.id] && state.apiReducer.weatherReducer[props.id].status === "success") {
    const {weatherState,humidity,pressure,windSpeed,temperature,minTemp,maxTemp,tempFeelsLike} = state.apiReducer.weatherReducer[props.id].response;
    return {
      weatherState: weatherState,
      humidity: humidity,
      pressure: pressure,
      windSpeed: windSpeed,
      temperature: temperature,
      minTemp: minTemp,
      maxTemp: maxTemp,
      tempFeelsLike: tempFeelsLike
    };
  }else if (state.apiReducer.weatherReducer[0] && state.apiReducer.weatherReducer[0].status === "success") {
    const {weatherState,humidity,pressure,windSpeed,temperature,minTemp,maxTemp,tempFeelsLike} = state.apiReducer.weatherReducer[0].response;
    return {
      weatherState: weatherState,
      humidity: humidity,
      pressure: pressure,
      windSpeed: windSpeed,
      temperature: temperature,
      minTemp: minTemp,
      maxTemp: maxTemp,
      tempFeelsLike: tempFeelsLike
    };
  }
  else {
    return {
      humidity: "",
      pressure: "",
      windSpeed: null,
      weatherState: "",
      temperature: null,
      minTemp: null,
      maxTemp: null,
      tempFeelsLike: null
    };
  }
};

const mapDispatchToProps = {
  getWeather
};

export default connect(mapStateToProps, mapDispatchToProps)(InfoBlockContainer);
