import { useQuery } from "@tanstack/react-query";
import { WeatherResponse } from "../entities";
import axios from "axios";
import { apiKey } from "../constants";
import { AxiosError } from "axios";


const useLocalWeather = (latitude: number, longitude: number) =>
  useQuery<WeatherResponse, AxiosError>({
    queryKey: ["weather"],
    queryFn: () =>
      axios
        .get(
          `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${latitude},${longitude}`,
          { withCredentials: false }
        )
        .then((res) => res.data),
  });

export default useLocalWeather;
