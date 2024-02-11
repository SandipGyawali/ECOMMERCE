import styles from "../../styles/recommendedItem.module.css";

function RecommendedItem() {
  return (
    <div className={styles.item}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKJD00tv4ZJ8j7YidwG5wXmxKf0aTT3HXTGsjOELpAxcmvaXy71wnBzPM-kLlnWwLksQ0&usqp=CAU"
        alt="product_img"
        className={styles.productImg}
      />
      <div className={styles.productDesc}>
        <span className={styles.price}>$230</span>
        <div className={styles.info}>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </div>
      </div>
    </div>
  );
}

export default RecommendedItem;
