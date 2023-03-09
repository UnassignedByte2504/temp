import React, { useState, useEffect } from "react";
import styles from "../prueba.module.css";

import { useClock, useImageChange } from "../hooks";
const ClockAndImage = () => {

  const [stopInterval, setStopInterval] = useState(false);
  const image = useImageChange(stopInterval);
  const currentDate = useClock();

  
  return (
    <div className={styles.ClockAndImage}>  {/*<<< div padre */}

      <div className={styles.Clock}> {/*<<< reloj y fecha */}
        <h2>Fecha y Hora:</h2>
        <h2>{currentDate.toLocaleString()}</h2>
      </div>


      <div className={styles.Image}> {/*<<< imagen y boton */}
        <h2>Current Image:</h2>
        <img
          src={image}
          alt="Random"
          onClick={() => setStopInterval(!stopInterval)}
        />
        <div className={stopInterval ? styles.IndicatorOff : styles.IndicatorOn}
        />
      </div>
    </div>
  );
};

export default ClockAndImage;


