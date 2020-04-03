import React from "react";
import './HomePage.scss';
import {HeaderBar} from "../components/HeaderBar";
import {Body} from "./components/Body";

export const HomePage:React.FC = () => {
    return(
        <div>
            <HeaderBar />
            <Body />
        </div>
    )
};