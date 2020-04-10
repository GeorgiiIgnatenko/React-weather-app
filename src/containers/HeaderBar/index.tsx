import React from 'react';
import {HeaderBar} from "../../components/HeaderBar";
import { changeTheme } from "../../redux/actions";
import { useDispatch } from "react-redux";

export default function HeaderBarContainer() {
    const dispatch = useDispatch();

    function switchHandler() {
        const appEl: any = document.querySelector(".app");
        if (appEl.classList.contains("dark")) {
            appEl.classList = "app light";
            dispatch(changeTheme("light"));
        } else {
            appEl.classList = "app dark";
            dispatch(changeTheme("dark"));
        }
    }

    return (
        <HeaderBar switchHandler={() => switchHandler()} />
    )
}