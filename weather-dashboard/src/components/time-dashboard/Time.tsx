import { useEffect, useState } from "react";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
const Time = () => {
  const [date, setDate] = useState<Date>(new Date());
  useEffect(() => {
    const interval = setInterval(() =>{
      setDate(() => new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, [])
  return (
    <div className="flex flex-col items-center justify-center w-2/3 md:w-1/3 bg-gray-600 p-3 md:py-16 rounded-3xl shadow-lg text-white">
      <span className="text-3xl font-extrabold">
        {`${date.getHours()} : ${date.getMinutes()}.${date.getSeconds()}`}
      </span>
      <span>{`${days[date.getDay() - 1]}, ${date.getDate()} ${months[date.getMonth()]}`}</span>
    </div>
  );
};

export default Time;
