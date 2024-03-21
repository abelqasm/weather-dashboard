import { ChangeEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LocalContainer from "./components/container/LocalContainer";
import CityContainer from "./components/container/CityContainer";
import SearchIcon from "./assets/search.png";

function App() {
  const [coord, setCoord] = useState<number[]>([]);
  const [query, setQuery] = useState<string>("");
  const { city } = useParams();
  const navigate = useNavigate();
  const success = (pos: GeolocationPosition) => {
    const crd = pos.coords;
    setCoord(() => [crd.latitude, crd.longitude]);
  };
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.permissions.query({ name: "geolocation" }).then((result) => {
        if (result.state === "denied") {
          alert(
            "permission denied please allow geolocalisation on your browser settings!"
          );
        } else {
          navigator.geolocation.getCurrentPosition(success);
        }
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }, []);
  return (
    <>
      <header className="flex flex-col items-center gap-5 justify-center p-5">
        <h1 className="text-3xl p-5 px-10 text-white shadow-lg shadow-gray-600 rounded-xl font-extrabold bg-gray-700">
          Weather dashboard
        </h1>
        <form
          className="flex bg-gray-300 rounded-lg"
          onSubmit={(event) => {
            event.preventDefault();
            navigate('/' + query);
          }}
        >
          <input
            className="p-2 rounded-tl-lg rounded-bl-lg"
            type="text"
            placeholder="Enter a city name here"
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setQuery(() => event.target.value)
            }
            required
          />
          <button
            className="flex items-center justify-center p-2  rounded-tr-lg rounded-br-lg"
            type="submit"
          >
            <img src={SearchIcon} alt="search" />
          </button>
        </form>
      </header>
      <main className="flex flex-col p-14 gap-10">
        {coord.length > 0 &&
          (city === undefined ? (
            <LocalContainer lat={coord[0]} long={coord[1]} />
          ) : (
            <CityContainer city={city} />
          ))}
      </main>
    </>
  );
}

export default App;
