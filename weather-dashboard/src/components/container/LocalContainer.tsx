import Time from "../time-dashboard/Time";
import DailyWeather from "../weather/DailyWeather";
import useLocalWeather from "../../hooks/useLocalWeather";
import WeatherDashboard from "../weather/WeatherDashboard";

interface Props {
  long: number;
  lat: number;
}

const LocalContainer = ({ long, lat }: Props) => {
  const { isLoading, data: weather, error } = useLocalWeather(lat, long);
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

export default LocalContainer;
