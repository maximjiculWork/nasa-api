import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function MainGenerator() {
  const [imageUrl, setImageUrl] = useState("/img/nasa-image.png");
  const [waitingText, setWaitingText] = useState("");
  const [descriptionText, setDescriptionText] = useState("");

  let date = new Date();
  let currentMonth = date.getMonth() + 1;
  let currentYear = date.getFullYear();
  let currentDay = date.getDate();
  let fullCurrentDate =
    " " + currentYear + "/" + currentMonth + "/" + currentDay;
  let daysArr = [];
  let monthsArr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let yearArr = [];
  for (let i = 1; i <= 31; i++) {
    daysArr.push(i);
  }
  for (let i = 1995; i <= currentYear; i++) {
    yearArr.push(i);
  }

  let daySelection = React.createRef();
  let monthSelection = React.createRef();
  let yearSelection = React.createRef();

  let API_KEY = "nnkr1eH8UxErndoIzsJRidacRRezP9iZzH7BjB7E";

  const say = () => {
    switch (monthSelection.current.value) {
      case "January":
        monthSelection = 1;
        break;
      case "February":
        monthSelection = 2;
        break;
      case "March":
        monthSelection = 3;
        break;
      case "April":
        monthSelection = 4;
        break;
      case "May":
        monthSelection = 5;
        break;
      case "June":
        monthSelection = 6;
        break;
      case "July":
        monthSelection = 7;
        break;
      case "August":
        monthSelection = 8;
        break;
      case "September":
        monthSelection = 9;
        break;
      case "October":
        monthSelection = 10;
        break;
      case "November":
        monthSelection = 11;
        break;
      case "December":
        monthSelection = 12;
        break;
    }
    gettingData();
    setWaitingText("It can take some time");
  };

  async function gettingData() {
    let response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${yearSelection.current.value}-${monthSelection}-${daySelection.current.value}`
    );
    let data = await response.json();
    setImageUrl(data.url);
    setDescriptionText(data.explanation);
  }
  return (
    <div className="main-generator__block">
      <h3>Choose a date to get a Picture of that Day</h3>
      <div className="date-selection">
        <div className="date-selection__select">
          <label>Day</label>
          <select name="day-selection" ref={daySelection}>
            {daysArr.map((day, index) => {
              return (
                <option key={day + index} value={day}>
                  {day}
                </option>
              );
            })}
          </select>
        </div>
        <div className="date-selection__select">
          <label>Month</label>
          <select name="month-selection" ref={monthSelection}>
            {monthsArr.map((month, index) => {
              return (
                <option key={month + index} value={month}>
                  {month}
                </option>
              );
            })}
          </select>
        </div>
        <div className="date-selection__select">
          <label>Year</label>
          <select name="year-selection" ref={yearSelection}>
            {yearArr.map((year, index) => {
              return (
                <option key={year + index} value={year}>
                  {year}
                </option>
              );
            })}
          </select>
        </div>
        <button className="btn-go" id="btn-get" onClick={say}>
          Go
        </button>
      </div>
      <p className="alert-for-time">{waitingText}</p>
      <img src={imageUrl} className="image-generated" alt="Nasa Day Picture" />
      <div className="description-for-image">
        <p>{descriptionText}</p>
      </div>
      <div className="go-home-block">
        <NavLink className="btn" to="/">
          Home
        </NavLink>
      </div>
    </div>
  );
}
