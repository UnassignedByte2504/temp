import React, { useEffect, useState } from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import ClockAndImage from "./components/ClockAndImage";
import Modal from "./components/Modal";

import styles from "./prueba.module.css";

const Prueba = () => {
  const [count, setCount] = useState(0);
  const [showModal, setShowModal] = useState(true);
  const [number, setNumber] = useState(0);

  const [imgurl, setImage] = useState("https://picsum.photos/200");
  const getNumber = (number) => {
    setNumber(number);
  };

  useEffect(()=>{
    setImage("https://picsum.photos/200?" + new Date().getTime());
  },[number])
  
  return (
    <div className={styles.Wrapper}>
        {showModal && (
            <Modal
                onClose={() => setShowModal(false)}
                onConfirm={(number) => {
                    setCount(number);
                    setShowModal(false);
                }}
            />
        )}
      <Header />
      <div className={styles.Content}>
        <ClockAndImage />
        <div className={styles.LowerContent}>
          <div className={styles.LeftContent} style={{
            display: "flex",
            flexDirection:"row",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
            <span
              style={{
                color: "#333",
                fontSize: "3rem",
                fontWeight: "bold",
              }}
            >
              {count}
            </span>
            <div className={styles.Image}>
              <img
                src={imgurl}
                alt="random"
                style={{ width: "100%", height: "100%" }}
              />

            </div>
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

