import React from "react";
import "./Forecast.scss";

import stormyIcon from "../../../../images/cloud 1.svg";
import cloudyIcon from "../../../../images/forecast 2.svg";
import rainyIcon from "../../../../images/rain 1.svg";
import sunnyIcon from "../../../../images/sun 1.svg";
import winterIcon from "../../../../images/winter 1.svg";

export const Forecast:React.FC = () => (
    <div className='forecast'>
        <div className="forecast__item">
            <p className="forecast__item__date">Понедельник</p>
            <object data={rainyIcon} type="" className="forecast__item__icon">I</object>
            <p className="forecast__item__temp">9°</p>
            <p className="forecast__item__desc">Дождь</p>
        </div>
        <div className="forecast__item">
            <p className="forecast__item__date">Понедельник</p>
            <object data={rainyIcon} type="" className="forecast__item__icon">I</object>
            <p className="forecast__item__temp">9°</p>
            <p className="forecast__item__desc">Дождь</p>
        </div>
        <div className="forecast__item">
            <p className="forecast__item__date">Понедельник</p>
            <object data={rainyIcon} type="" className="forecast__item__icon">I</object>
            <p className="forecast__item__temp">9°</p>
            <p className="forecast__item__desc">Дождь</p>
        </div>
        <div className="forecast__item">
            <p className="forecast__item__date">Понедельник</p>
            <object data={rainyIcon} type="" className="forecast__item__icon">I</object>
            <p className="forecast__item__temp">9°</p>
            <p className="forecast__item__desc">Дождь</p>
        </div>
    </div>
);
