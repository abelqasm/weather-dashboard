import pressureIcon from "./../../../assets/pressure.png";

interface Props {
    pressure: number | undefined,
}

const Pressure = ({pressure}: Props) => {
  return (
    <div className="flex flex-col items-center justify-center">
        <img className="h-10 w-10" src={pressureIcon} alt="wind" />
        <span>{pressure} hPa</span>
        <span>Pressure</span>
    </div>
  )
}

export default Pressure