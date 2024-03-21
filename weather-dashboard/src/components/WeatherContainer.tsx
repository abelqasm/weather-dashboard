import Time from "./time-dashboard/Time";
import WeatherDashboard from "./weather/WeatherDashboard";
import DailyWeather from "./weather/DailyWeather";
import useWeather from "../hooks/useWeather";

interface Props {
  long: number;
  lat: number;
}

const WeatherContainer = ({ long, lat }: Props) => {
  const { isLoading, data: weather, error } = useWeather(lat, long);
  if (isLoading) return <></>;
  if (error) {
    return <p>error occured </p>;
  }
  return (
    <>
      <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-center h-fit ">
        <Time />
        <WeatherDashboard weather={weather!} />
      </div>
      <DailyWeather forecast={weather?.forecast.forecastday[0].hour} />
    </>
  );
};

export default WeatherContainer;
