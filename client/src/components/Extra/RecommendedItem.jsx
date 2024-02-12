/* eslint-disable react/prop-types */
import styles from "../../styles/recommendedItem.module.css";

function RecommendedItem({ data }) {
  return (
    <div className={styles.item}>
      <img
        src={data.productImg[0]}
        alt="product_img"
        className={styles.productImg}
      />
      <div className={styles.productDesc}>
        <span className={styles.price}>${data.price.amount}</span>
        <div className={styles.info}>
          <span>{data.name}</span>
        </div>
      </div>
    </div>
  );
}

export default RecommendedItem;
