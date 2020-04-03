import React from "react";
import "./HeaderBar.scss";
import burgerMenu from "../../../../images/burger-menu.svg";
import logo from "../../../../images/Logo.png";
import { Switch } from "antd";
import "antd/dist/antd.css";

export const HeaderBar: React.FC = () => {
  return (
    <div className="header">
      <div className="header_bar">
        <div className="header_bar__left">
          <object data={burgerMenu} type="image/svg+xml">
            I
          </object>
          <div className="header_bar__logo">
            <img src={logo} alt="" />
          </div>
          <div className="header_bar__title">
            <p>Погода</p>
          </div>
        </div>
        <div className="header_bar__date">
          <p>СЕГОДНЯ</p>
        </div>
        <div className="header_bar__switch">
          <p>Светлая</p>
          <Switch defaultChecked={true} />
          <p>Темная</p>
        </div>
      </div>
    </div>
  );
};
