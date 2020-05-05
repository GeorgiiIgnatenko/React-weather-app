import React from "react";
import { Switch } from "antd";
import './HeaderBar.scss'
import "antd/es/switch/style/index.css";
import { NavLink } from "react-router-dom";

export const HeaderBar = ({switchHandler}:any) => (
    <div className="header">
      <div className="header_bar">
        <div className="header_bar__left">
          <NavLink
              className="header_bar__link"
              to="/home"
          >
            <div className="header_bar__logo">
            </div>
            <div className="header_bar__title">
              <p>Погода</p>
            </div>
          </NavLink>
        </div>
        <div className="header_bar__date">
          <p>СЕГОДНЯ</p>
        </div>
        <div className="header_bar__switch">
          <p>Светлая</p>
          <Switch onChange={() => switchHandler()} defaultChecked={true} />
          <p>Темная</p>
        </div>
      </div>
    </div>
);
