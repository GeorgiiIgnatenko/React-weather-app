import React from "react";
import "./DetailsPage.scss";

import { InfoBlock } from "./components/InfoBlock";
import { Forecast } from "./components/Forecast";

export const DetailsPage: React.FC = () => {
  return (
    <div className="details-page">
      <div className='details-block container'>
        <InfoBlock />
        <Forecast />
      </div>
    </div>
  );
};
