import React from "react";
import { connect } from "react-redux";
import { ForecastItem } from "../../../components/DetailsPage/ForecastItem";
import { getForecast } from "../../../redux/actions";

import moment from "moment";
import "moment/locale/ru";

moment.locale("ru");

interface PropsTypes {
  city: string;
  id: number;
}

class ForecastContainer extends React.Component<any, PropsTypes> {
  week: string[] = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота"
  ];

  componentDidMount(): void {
    if (this.props.forecast.length < 3) {
      this.props.getForecast(this.props.city);
    }
  }

  render(): React.ReactElement {
    let state = this.props.forecast;
    let id = 0;
    if (state.every((el: any) => el.status === "success")) {
      let forecast: object[] = [];
      let idx = state.findIndex(
        (el: any) => el.response.city.name === this.props.city
      );
      if (idx >= 0) {
        [0, 1, 2, 3].map((id: number) => {
          if (state[idx]) {
            const data:object = state[idx].response.list.find((el: any) => el.dt_txt === getByDate(id));
            forecast.push(data);
          }
        });
      }
      return (
        <div className="forecast">
          {forecast.map((el: any) => {
            let today = moment().add(id + 1, "days");
            id++;
            return (
              <ForecastItem
                today={today.format("dddd")}
                id={id}
                key={id}
                temp={Math.floor(el.main.temp)}
                weatherState={el.weather[0].main}
              />
            );
          })}
        </div>
      );
    } else {
      return <div>loading...</div>;
    }
    // let id = 0;
    // if (this.props.dataArr) {
    //   return (
    //     <div className="forecast">
    //       {this.props.dataArr.map((el: any) => {
    //         let today = moment().add(id + 1, "days");
    //         id++;
    //         return (
    //           <ForecastItem
    //             today={today.format("dddd")}
    //             id={id}
    //             key={id}
    //             temp={Math.floor(el.main.temp)}
    //             weatherState={el.weather[0].main}
    //           />
    //         );
    //       })}
    //     </div>
    //   );
    // }
  }
}

function getByDate(id: number) {
  let date = moment()
    .add(id + 1, "days")
    .format("YYYY-MM-DD");
  return moment().format(`${date} 15:00:00`);
}

const mapStateToProps = (state: any, props: any) => {
  if (state.apiReducer.forecastReducer) {
    return { forecast: state.apiReducer.forecastReducer };
  } else {
    return {};
  }

  //   let dataArr: any = [];
  //   [0, 1, 2, 3].map((id: number) => {
  //     const data = state.apiReducer.forecastReducer[
  //       props.id
  //     ].response.list.find((el: any) => el.dt_txt === getByDate(id));
  //     dataArr.push(data);
  //   });
  //   return { dataArr: dataArr};
  // } else if (
  //   state.apiReducer.forecastReducer[0] &&
  //   state.apiReducer.forecastReducer[0].response
  // ) {
  //   let dataArr: any = [];
  //   [0, 1, 2, 3].map((id: number) => {
  //     const data = state.apiReducer.forecastReducer[0].response.list.find(
  //       (el: any) => el.dt_txt === getByDate(id)
  //     );
  //     dataArr.push(data);
  //   });
  //   return { dataArr: dataArr};
  // }else {
  //     return {}
  // }
};

const mapDispatchToProps = {
  getForecast
};

export default connect(mapStateToProps, mapDispatchToProps)(ForecastContainer);
