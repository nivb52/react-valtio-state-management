import React from "react";
import { useProxy } from "valtio";

import store from "../store";

import WeatherResult from './WeatherResult';

export default () => {
  const snapshot = useProxy(store);

  return (
    <div className="cities">
      Cities
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gridColumnGap: "1rem"
        }}
      >
        {snapshot.cities.map(city => (
          <WeatherResult
            name={city.name}
            key={city.name}
            weather={city.weather}
          />
        ))}
      </div>
      <div>Average: {snapshot.getAverageTemperature()}</div>
    </div>
  );
};
