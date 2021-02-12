import React, { useEffect, useRef, useState } from "react";
import "./army.css";

export default function Army({ focas, setFocas, arm, id, index, place }) {
  const army = useRef();

  useEffect(() => {
    console.log(focas);
    if (focas.idF === id) {
      army.current.style.backgroundColor = "blue";
    } else {
      army.current.style.backgroundColor = "red";
    }
  }, [focas]);

  const focasClick = () => {
    if (focas.idF !== id) {
      setFocas({ idF: id, armyF: arm, index, place });
    } else {
      setFocas(false);
    }
  };

  return <button ref={army} onClick={focasClick} className="army"></button>;
}
