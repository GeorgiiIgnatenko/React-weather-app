import React from "react";
import { useDispatch } from "react-redux";
import "./HeaderBar.scss";
import { Switch } from "antd";
import "antd/dist/antd.css";

import { NavLink } from "react-router-dom";
import { changeTheme } from "../../../redux/actions";

export const HeaderBar: React.FC = () => {
  const dispatch = useDispatch();

  const switchHandler = () => {
    const appEl: any = document.querySelector(".app");
    if (appEl.classList.contains("dark")) {
      appEl.classList = "app light";
      dispatch(changeTheme("light"));
    } else {
      appEl.classList = "app dark";
      dispatch(changeTheme("dark"));
    }
  };

  return (
    <div className="header">
      <div className="header_bar">
        <div className="header_bar__left">
          <svg
            width="25"
            height="15"
            viewBox="0 0 25 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="25" height="3" rx="1.5" fill="white" />
            <rect y="6" width="25" height="3" rx="1.5" fill="white" />
            <rect y="12" width="25" height="3" rx="1.5" fill="white" />
          </svg>
          <NavLink className="header_bar__link" to="/">
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
};
