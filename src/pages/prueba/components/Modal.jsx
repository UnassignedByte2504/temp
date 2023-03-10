import React, { useState } from "react";
import styles from "../prueba.module.css";
import { useClock } from "../hooks";

const Modal = (props) => {
  const { onClose, onConfirm } = props;
  const date = useClock();
  const [number, setNumber] = useState(0);

  const handleConfirm = () => {
    onConfirm(number);
  };

  return (
    <div className={styles.ModalWrapper}>
      <div className={styles.Modal}>
        <div className={styles.ModalHeader}>
          <div className={styles.ModalTitle}>
            <h2>{date.toLocaleString()}</h2>
          </div>
          <div className={styles.CloseButton} onClick={onClose}>
            X
          </div>
        </div>
        <div className={styles.ModalBody}>
          <div className={styles.Textfield}>
            <input
              type="number"
              placeholder="Numero a cambiar"
              className={styles.TextFieldInput}
              min="0"
              onChange={(e) => {
                setNumber(e.target.value);
              }}
            />
          </div>
          <button className={styles.SubmitButton} onClick={handleConfirm}>
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
