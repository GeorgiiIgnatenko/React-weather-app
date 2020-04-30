import React from "react";
import "./DetailsPage.scss";

import InfoBlockContainer from "../../containers/DetailsPage/InfoBlock";
import ForecastContainer from "../../containers/DetailsPage/Forecast";

interface PropsTypes {
    city:string;
    id:number;
}

export const DetailsPage = ({city,id}:PropsTypes) => {
    return (
        <div className="details-page">
            <div className='container'>
                <InfoBlockContainer
                    city={city}
                    id={id}
                />
                <ForecastContainer
                    city={city}
                    id={id}
                />
            </div>
        </div>
    );
};
