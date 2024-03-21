import cloudinessIcon from "./../../../assets/cloudiness.png";

interface Props {
    cloudiness: number | undefined,
}

const Cloudiness = ({cloudiness}: Props) => {
  return (
    <div className="flex flex-col items-center justify-center">
        <img className="h-8 w-8" src={cloudinessIcon} alt="wind" />
        <span>{cloudiness} %</span>
        <span >Cloudiness</span>
    </div>
  )
}

export default Cloudiness