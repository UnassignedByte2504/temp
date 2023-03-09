import React, { useState } from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import ClockAndImage from "./components/ClockAndImage";
import Modal from "./components/Modal";

import styles from "./prueba.module.css";

const Prueba = () => {
  const [count, setCount] = useState(0);
  const [showModal, setShowModal] = useState(false);

  
  return (
    <div className={styles.Wrapper}>
        {showModal && (
            <Modal
                onClose={() => setShowModal(false)}
                onConfirm={() => {
                    setCount(count + 1);
                    setShowModal(false);
                }}
            />
        )}
      <Header />
      <div className={styles.Content}>
        <ClockAndImage />
        <div className={styles.LowerContent}>
          <div className={styles.LeftContent}>
            <span
              style={{
                color: "#333",
                fontSize: "3rem",
                fontWeight: "bold",
              }}
            >
              {count}
            </span>
          </div>
          <div className={styles.RightContent}>
            <button
              className={styles.Button}
              onClick={() => setShowModal(true)}
            >
              Open Modal
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Prueba;
