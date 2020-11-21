import { proxy, subscribe } from "valtio";
import getWeather, { WeatherResult } from "./getWeather";

interface IStore {
  city: string;
  cities: ICityWeather[];
  getAverageTemperature: () => number | string;
}

interface ICityWeather {
  name: string;
  weather: WeatherResult;
}

const store = proxy<IStore>({
  city: "",
  cities: [],
  getAverageTemperature : () =>{
    let total = store.cities.reduce( (a,city ) => a + city.weather.temperature.actual , 0); return total ? (total / store.cities.length).toFixed(2) : 0;
    }
});

export const addCity = async () => {
  const weather = await getWeather(store.city);
  if (weather) {
    console.log(weather)
    store.cities.push({
      name: store.city,
      weather
    });
  }
};

subscribe(store.cities, (args) => {
  console.log("Store changed", args)
})


export default store;
