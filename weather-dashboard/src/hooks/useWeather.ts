import { useQuery } from "@tanstack/react-query";
import { WeatherResponse } from "../entities";
import axios from "axios";

const apiKey = "d75d5ac64ff74be5b9c112832242103";

const useWeather = (latitude: number, longitude: number) =>
  useQuery<WeatherResponse>({
    queryKey: ["weather"],
    queryFn: () =>
      axios
        .get(
          `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${latitude},${longitude}`,
          { withCredentials: false }
        )
        .then((res) => res.data),
  });

export default useWeather;
