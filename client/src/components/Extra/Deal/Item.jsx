/* eslint-disable react/prop-types */
import styles from "../../../styles/dealOffer.module.css";

function Item({ data }) {
  return (
    <div className={styles.item}>
      <img src={data.productImg[0]} alt="offer-img" />
      <div className={styles.offerPercentWrapper}>
        <span className="offerPercent">-25%</span>
      </div>
    </div>
  );
}

export default Item;
