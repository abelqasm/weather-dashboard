import { WeatherResponse } from "../../entities";
import WeatherIcon from "./WeatherIcon";
import Humidity from "./weather-details/Humidity";
import WindSpeed from "./weather-details/WindSpeed";
import Pressure from "./weather-details/Pressure";
import Cloudiness from "./weather-details/Cloudiness";

interface Props {
  weather: WeatherResponse;
}

const WeatherDashboard = ({weather}: Props) => {
  
  return (
    <div className="w-full md:w-2/3 bg-gray-600 h-full rounded-3xl shadow-lg flex text-white p-5 flex-col md:flex-row">
      <div className="flex md:w-2/3">
        <div className="flex gap-2 flex-col justify-center items-center w-1/2">
          <span className="text-3xl  lg:text-5xl font-extrabold">
            {weather?.current.temp_c}°C
          </span>
          <span className="lg:text-base text-xs">
            Feels like: {weather?.current.feelslike_c}°C
          </span>
          <span className="text-xl font-semibold">{weather?.location.name}</span>
        </div>
        <WeatherIcon weatherCondition={weather?.current.condition} />
      </div>
      <div className="flex md:flex-col gap-4 justify-center items-center md:w-1/3 lg:text-base text-sm text-center">
        <div className="flex gap-2 ">
          <Humidity humidity={weather?.current.humidity} />
          <WindSpeed windSpeed={weather?.current.wind_kph} />
        </div>
        <div className="flex gap-2">
          <Pressure pressure={weather?.current.pressure_mb} />
          <Cloudiness cloudiness={weather?.current.cloud} />
        </div>
      </div>
    </div>
  );
};

export default WeatherDashboard;
