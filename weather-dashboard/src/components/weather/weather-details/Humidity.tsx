import humidityIcon from "./../../../assets/humidity.png";

interface Props {
    humidity: number | undefined,
}

const Humidity = ({humidity}: Props) => {
  return (
    <div className="flex flex-col items-center justify-center">
        <img className="h-6 w-6" src={humidityIcon} alt="wind" />
        <span>{humidity} %</span>
        <span>Humidity</span>
    </div>
  )
}


export default Humidity