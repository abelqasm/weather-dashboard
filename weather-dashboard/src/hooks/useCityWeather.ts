import { useQuery } from "@tanstack/react-query";
import { WeatherResponse } from "../entities";
import axios from "axios";
import { apiKey } from "../constants";
import { AxiosError } from "axios";


const useCityWeather = (city: string) =>
  useQuery<WeatherResponse, AxiosError>({
    queryKey: ["weather", city],
    queryFn: () =>
      axios
        .get(
          `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}`,
          { withCredentials: false }
        )
        .then((res) => res.data),
  });

export default useCityWeather;
