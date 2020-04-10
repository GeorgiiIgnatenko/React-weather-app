import React from "react";
import "./DetailsPage.scss";

import InfoBlockContainer from "../../containers/DetailsPage/InfoBlock";
import ForecastContainer from "../../containers/DetailsPage/Forecast";

export const DetailsPage: React.FC = () => {
    return (
        <div className="details-page">
            <div className='container'>
                <InfoBlockContainer />
                <ForecastContainer />
            </div>
        </div>
    );
};
