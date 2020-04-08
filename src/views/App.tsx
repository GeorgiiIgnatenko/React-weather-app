import React from "react";

import "./App.scss";

import { HeaderBar } from "./components/HeaderBar";
import { Routes } from "../Routes/Routes";

export const App = () => {
  return (
    <div className="app dark">
      <HeaderBar />
      <Routes />
    </div>
  );
};
