import React from "react";
import "./SeasonDisplay.css";

const getSeasons = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const seasonConfig = {
  summer: {
    message: "Let's hit the beach",
    iconName: "sun",
  },
  winter: {
    message: "Burr, its chilly!!!",
    iconName: "snowflake",
  },
};

const SeasonDisplay = (props) => {
  const season = getSeasons(props.lat, new Date().getMonth());
  console.log(seasonConfig[season]);
  const { message, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      {/* // direct output 
      {season === "Winter" ? "Burr, its chilly!!!" : "Lets hit the beach"} */}
      {/* // using variables */}

      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{message}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
