import React from "react";
import {Input} from "antd";
import 'antd/dist/antd.css';
import './SearchBar.scss';
const {Search} = Input;

export const SearchBar:React.FC = () => {
    return(
        <div className='search_bar'>
            <Search
                placeholder="Название города"
            />
        </div>
    )
};