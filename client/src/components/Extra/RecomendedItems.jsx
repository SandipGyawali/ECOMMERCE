import RecommendedItem from "./RecommendedItem";
import styles from "../../styles/recommendedItem.module.css";
import { useRecommendedItemsQuery } from "../../redux/api/extraApiSlice";
import { v4 as uuid } from "uuid";

function RecommendedItems() {
  const {
    data: productItems,
    isLoading,
    isError,
    error,
  } = useRecommendedItemsQuery();

  return (
    <>
      <div className={styles.recommendedItemTitle}>
        <h2>Recommended Items</h2>
      </div>
      <div className={styles.itemContainer} id="recommend_items_">
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>Error: {error.message}</div>
        ) : (
          <div className={styles.itemsWrapper}>
            {productItems?.map((data) => (
              <RecommendedItem data={data} key={uuid()} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default RecommendedItems;
