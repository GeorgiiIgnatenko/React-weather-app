import React from "react";
import './WeatherList.scss';
import {WeatherItem} from "../WeatherItem";
import {ApiService} from "../../../../services/api-service";


export default class WeatherList extends React.Component{

    //componentDidMount(): void {
    //    new ApiService().getWeather().then((r) => {
    //        console.log(r)
    //    })
    //}

    render(){
        return(
            <div className='weather_list'>
                <WeatherItem/>
                <WeatherItem/>
                <WeatherItem/>
            </div>
        )
    }
};


