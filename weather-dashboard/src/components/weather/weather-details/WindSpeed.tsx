import windIcon from "./../../../assets/wind.png";

interface Props {
    windSpeed: number | undefined,
}

const WindSpeed = ({windSpeed}: Props) => {
  return (
    <div className="flex flex-col items-center justify-center">
        <img className="h-6 w-6" src={windIcon} alt="wind" />
        <span>{windSpeed} km/h</span>
        <span>Wind speed</span>
    </div>
  )
}

export default WindSpeed