import { useEffect, useState } from "react";

type Condition = { text: string; icon: string; code: number };
interface Props {
  weatherCondition: Condition | undefined;
}
const WeatherIcon = ({ weatherCondition }: Props) => {
  const [icon, setIcon] = useState<Condition | undefined>(weatherCondition);
  useEffect(() => {
    if (weatherCondition !== undefined) {
      setIcon(() => weatherCondition);
    }
  }, [weatherCondition]);
  return (
    <div className="flex flex-col justify-center items-center w-1/2">
      <img className="w-28 lg:w-40" src={icon?.icon} alt={icon?.text} />
      <span className="text-xl font-bold">{icon?.text}</span>
    </div>
  );
};

export default WeatherIcon;
