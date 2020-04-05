import React from "react";
import "./InfoBlock.scss";

import stormyIcon from "../../../../images/cloud 1.svg";
import cloudyIcon from "../../../../images/forecast 2.svg";
import rainyIcon from "../../../../images/rain 1.svg";
import sunnyIcon from "../../../../images/sun 1.svg";
import winterIcon from "../../../../images/winter 1.svg";

export const InfoBlock: React.FC = () => (
  <div className="info_block">
    <p className="info_block__title">Погода в Новосибирске</p>
    <p className="info_block__time">Сейчас: 15:44</p>
    <div className="info_block__weather_state">
        <object className='info_block__weather_state__icon' data={stormyIcon} type="image/svg+xml">
          I
        </object>
      <div className="info_block__weather_state__desc">
        <div className="info_block__weather_state__desc__temp">
        <p>
          Температура: +28°
        </p>
        <span>
          Ощущается как: +28°
        </span>
        </div>
        <p className="info_block__weather_state__desc__clouds">Облачно</p>
        <p className="info_block__weather_state__desc__pressure">
          Давление: 1016
        </p>
        <p className="info_block__weather_state__desc__humidity">
          Влажность: 93%
        </p>
        <p className="info_block__weather_state__desc__wind">Ветер: 12М/C</p>
      </div>
    </div>
  </div>
);
