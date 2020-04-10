import React from "react";
import "./Forecast.scss";

import stormyIcon from "../../../images/cloud 1.svg";
import cloudyIcon from "../../../images/forecast 2.svg";
import rainyIcon from "../../../images/rain 1.svg";
import sunnyIcon from "../../../images/sun 1.svg";
import winterIcon from "../../../images/winter 1.svg";

export const Forecast:React.FC = () => {
    const week:any = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'];
    const date = new Date().getDay();
    console.log(date);
    return(
        <div className='forecast'>
            {[0,1,2,3].map((el:any) => {
                return(
                    <div
                        className="forecast__item"
                        key ={el}
                    >
                        <p className="forecast__item__date">{week[date + 1]}</p>
                        <img src={rainyIcon} alt='' className="forecast__item__icon"/>
                        <p className="forecast__item__temp">9°</p>
                        <p className="forecast__item__desc">Дождь</p>
                    </div>
                )
            })}
            </div>
    )
};

