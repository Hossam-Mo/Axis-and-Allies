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

  useEffect(() => {
    console.log(`one${one}`);
    console.log("tow");
  }, [one, tow]);

  const test = (set, arr, t) => {
    set([...t, arr.splice(0, 1)]);

    setFocas(false);
  };
  return (
    <div className="App">
      <button
        className="one"
        onClick={() => {
          if (focas) {
            test(setOne, focas.armyF, one);
          }
        }}
      >
        {one.map((it) => {
          return (
            <Army focas={focas} setFocas={setFocas} id={it.id} arm={one}></Army>
          );
        })}
      </button>
      <button
        onClick={() => {
          if (focas) test(setTow, focas.armyF, tow);
        }}
        className="tow"
      >
        {tow.map((it) => {
          return (
            <Army focas={focas} setFocas={setFocas} id={it.id} arm={tow}></Army>
          );
        })}
      </button>
    </div>
  );
}

export default App;
