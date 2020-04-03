import React from "react";
import './App.scss'

import {HeaderBar} from "./components/HeaderBar";
import {Routes} from "./Routes/Routes";

export const App = () => (
    <div>
        <HeaderBar/>
        <Routes/>
    </div>
);