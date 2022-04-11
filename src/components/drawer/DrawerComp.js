import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import day from "./data";

const DrawerComp = () => {
  const days = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
  ];
  return (
    <>
      <div className="drawer_body">
        <div className="drawer_top_text">
          <h4>Delivery time</h4>
          <CloseIcon />
        </div>
        <div className="drawer_date_icon">
          <div>
            <img src="/icons/date.svg" />
            <h5>October 2021</h5>
          </div>
          <div>
            <img src="/icons/arrowB.svg" />
            <img src="/icons/arrowB.svg" />
          </div>
        </div>
        <div className="month_name">
          <h6>Mon</h6>
          <h6>Tue</h6>
          <h6>Wed</h6>
          <h6>Thu</h6>
          <h6>Fri</h6>
          <h6>Sat</h6>
          <h6>Sun</h6>
        </div>
        <div className="month_day">
          {days.map((item) => {
            return (
              <div
                key={item}
                className={`day ${item === 10 && "color"} ${
                  item > 10 && "border"
                }`}
              >
                <h5>{item}</h5>
                {item > 10 && <div className="cricle"></div>}
              </div>
            );
          })}
        </div>
        <div className="notfi_day">
          {day.map((item, index) => {
            return (
              <div key={index} className="item_day">
                <div>
                  <div className="cricle"></div>
                  <h4>{item.day}</h4>
                </div>
                <h4>{item.hours}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DrawerComp;
