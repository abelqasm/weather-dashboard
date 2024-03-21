import Time from "../time-dashboard/Time";
import DailyWeather from "../weather/DailyWeather";
import useCityWeather from "../../hooks/useCityWeather";
import WeatherDashboard from "../weather/WeatherDashboard";
import SearchError from "./SearchError";
interface Props {
  city: string;
}
const CityContainer = ({ city }: Props) => {
  const { isLoading, data: weather, error } = useCityWeather(city);
  if (isLoading) return <></>;
  if (error) {
    if (error.response?.status === 400) {
      return (
        <SearchError error="The city you are searching for is either misspeled or doesnt exist" />
      );
    }
    return <SearchError error="Cant reach server" />;
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

export default CityContainer;
