import React from "react";

import { WeatherResult } from "../getWeather";

export default ({
  name,
  weather
}: {
  name: string;
  weather: WeatherResult;
}) => (
  <>
    <div>{name}</div>
    <div>{weather.wind.speed} MPH</div>
    <div>{weather.temperature.actual.toFixed(2)} F</div>
    <div>{weather.temperature.feelsLike.toFixed(2)} F</div>
    <div>{weather.summary.description}</div>
  </>
);
