import { ForeCastHour } from "../../entities";

interface Props {
  forecast: ForeCastHour[] | undefined;
}
const indexing = ["12:00", "15:00", "17:00", "20:00", "23:00"];
const DailyWeather = ({ forecast }: Props) => {
  const hours = forecast?.filter(
    (hour, index) =>
      index === 11 ||
      index === 14 ||
      index === 17 ||
      index === 20 ||
      index === 23
  );
  return (
    <ul className="w-full grid lg:grid-cols-5 md:grid-cols-3 gap-10 grid-cols-2 bg-gray-600 h-full rounded-3xl shadow-lg text-white p-5">
      {hours?.map((hour, index) => (
        <li className="flex bg-gray-700 p-10 rounded-3xl items-center justify-center flex-col gap-2" key={index}>
          <span className="text-xl font-semibold">{indexing[index]}</span>
          <img className="w-20" src={hour.condition.icon} alt="weather" />
          <span>{hour.temp_c} °C</span>
          <span> {hour.wind_kph} km/h</span>
        </li>
      ))}
    </ul>
  );
};

export default DailyWeather;
