/* eslint-disable react/prop-types */
import styles from "../../../styles/dealOffer.module.css";

function Unit({ time, unit }) {
  return (
    <div className={styles.unit}>
      <span className={styles.time}>{time}</span>
      <span>{unit}</span>
    </div>
  );
}

export default Unit;
