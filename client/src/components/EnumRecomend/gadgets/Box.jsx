/* eslint-disable react/prop-types */
import styles from "../../../styles/homeSource.module.css";

function Box({ number, data }) {
  console.log(data);
  return (
    <div className={`${styles.item} item_${number + 1}`}>
      <div className={styles.item_content}>
        <p className="item_enum">{data?.name}</p>
        <div>
          <span className="item_From">From</span>
          <span className="item_currency">USD {data?.price.amount}</span>
        </div>
      </div>
      <img src={data?.productImg[0]} alt="" className={styles.item_img} />
    </div>
  );
}

export default Box;
