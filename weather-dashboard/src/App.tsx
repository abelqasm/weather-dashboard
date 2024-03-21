import { useEffect, useState } from "react";
import WeatherContainer from "./components/WeatherContainer";

function App() {
  const [coord, setCoord] = useState<number[]>([]);
  const success = (pos: GeolocationPosition) => {
    const crd = pos.coords;
    setCoord(() => [crd.latitude, crd.longitude]);
  };
  const errors = (error: GeolocationPositionError) => {
    console.warn(`ERROR(${error.code}): ${error.message}`);
  };
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.permissions.query({ name: "geolocation" }).then((result) => {
        if (result.state === "denied") {
          alert(
            "permission denied please allow geolocalisation on your browser settings!"
          );
        } else {
          navigator.geolocation.getCurrentPosition(success, errors);
        }
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }, []);
  return (
    <>
      <header className="flex justify-center p-5">
        <h1 className="text-3xl p-5 px-10 text-white shadow-lg shadow-gray-600 rounded-xl font-extrabold bg-gray-700">Weather dashboard</h1>
      </header>
      <main className="flex flex-col p-14 gap-10">
        {coord.length > 0 && (
          <WeatherContainer lat={coord[0]} long={coord[1]} />
        )}
      </main>
    </>
  );
}

export default App;