import React from "react";
import { Spin } from "antd";
import 'antd/es/spin/style/index.css'
import './WeatherItemlLoader.scss'

export const WeatherItemLoader = () => (
    <div className='weather_item_loader'>
        <p>Загрузка...</p>
        <Spin size='large'/>
    </div>
);