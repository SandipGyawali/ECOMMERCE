import RecommendedItem from "./RecommendedItem";
import styles from "../../styles/recommendedItem.module.css";

function RecommendedItems() {
  return (
    <>
      <div className={styles.recommendedItemTitle}>
        <h2>Recommended Items</h2>
      </div>
      <div className={styles.itemContainer} id="recommend_items_">
        <div className={styles.itemsWrapper}>
          <RecommendedItem />
          <RecommendedItem />
          <RecommendedItem />
          <RecommendedItem />
          <RecommendedItem />
          <RecommendedItem />
          <RecommendedItem />
          <RecommendedItem />
          <RecommendedItem />
          <RecommendedItem />
        </div>
      </div>
    </>
  );
}

export default RecommendedItems;
