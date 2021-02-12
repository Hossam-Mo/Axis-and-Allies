import { useEffect, useState } from "react";
import "./App.css";
import Army from "./componants/army/Army";

function App() {
  const [focas, setFocas] = useState(false);
  const [one, setOne] = useState([
    {
      id: "1",
    },
    {
      id: "2",
    },
  ]);
  const [tow, setTow] = useState([]);

  const move = (arr, place, set) => {
    if (focas) {
      set([...arr, { id: focas.idF, place: place }]);
      focas.armyF.splice(focas.index, 1);
      setFocas(false);
    }
  };
  return (
    <div className="App">
      <button
        className="one"
        onClick={() => {
          if (focas) {
            if (focas.place !== "one") move(one, "one", setOne);
          }
        }}
      >
        {one.map((it, index) => {
          return (
            <Army
              focas={focas}
              setFocas={setFocas}
              id={it.id}
              arm={one}
              index={index}
              place={"one"}
            ></Army>
          );
        })}
      </button>
      <button
        onClick={() => {
          if (focas.place !== "tow") move(tow, "tow", setTow);
        }}
        className="tow"
      >
        {tow.map((it, index) => {
          return (
            <Army
              focas={focas}
              setFocas={setFocas}
              id={it.id}
              arm={tow}
              index={index}
              place={"tow"}
            ></Army>
          );
        })}
      </button>
    </div>
  );
}

export default App;
