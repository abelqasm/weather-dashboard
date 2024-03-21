export type ForeCastHour = {
  hance_of_rain: number;
  chance_of_snow: number;
  cloud: number;
  condition: {
    text: string;
    icon: string;
    code: number;
  };
  dewpoint_c: number;
  dewpoint_f: number;
  diff_rad: number;
  feelslike_c: number;
  feelslike_f: number;
  gust_kph: number;
  gust_mph: number;
  heatindex_c: number;
  heatindex_f: number;
  humidity: number;
  is_day: number;
  precip_in: number;
  precip_mm: number;
  pressure_in: number;
  pressure_mb: number;
  short_rad: number;
  snow_cm: number;
  temp_c: number;
  temp_f: number;
  time: string;
  time_epoch: number;
  uv: number;
  vis_km: number;
  vis_miles: number;
  will_it_rain: number;
  will_it_snow: number;
  wind_degree: number;
  wind_dir: string;
  wind_kph: number;
  wind_mph: number;
  windchill_c: number;
  windchill_f: number;
};

type ForeCastDay = {
  maxtemp_c: number;
  maxtemp_f: number;
  mintemp_c: number;
  mintemp_f: number;
  avgtemp_c: number;
  avghumidity: number;
  avgtemp_f: number;
  avgvis_km: number;
  avgvis_miles: number;
  condition: {
    code: number;
    icon: string;
    text: string;
  };
  daily_chance_of_rain: number;
  daily_chance_of_snow: number;
  daily_will_it_rain: number;
  daily_will_it_snow: number;
  maxwind_kph: number;
  maxwind_mph: number;
  totalprecip_in: number;
  totalprecip_mm: number;
  totalsnow_cm: number;
  uv: number;
};

type ForeCast = {
  astro: {
    sunrise: string;
    sunset: string;
    moonrise: string;
    moonset: string;
    moon_phase: string;
  };
  date: string;
  date_epoch: number;
  day: ForeCastDay;
  hour: ForeCastHour[];
};
export type WeatherResponse = {
  current: {
    cloud: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    feelslike_c: number;
    feelslike_f: number;
    gust_kph: number;
    gust_mph: number;
    humidity: number;
    is_dayn: number;
    last_updated: string;
    last_updated_epoch: number;
    precip_in: number;
    precip_mm: number;
    pressure_in: number;
    pressure_mb: number;
    temp_c: number;
    temp_f: number;
    uv: number;
    vis_km: number;
    vis_miles: number;
    wind_degree: number;
    wind_dir: string;
    wind_kph: number;
    wind_mph: number;
  };
  forecast: {
    forecastday: ForeCast[];
  };
  location: {
    country: string;
    lat: number;
    localtime: string;
    localtime_epoch: number;
    lon: number;
    name: string;
    region: string;
    tz_id: string;
  };
};
