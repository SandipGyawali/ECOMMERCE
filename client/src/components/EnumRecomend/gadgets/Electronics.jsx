import styles from "../../../styles/homeSource.module.css";
import Box from "./Box";
import { v4 as uuid } from "uuid";
import { useElectronicSourceQuery } from "../../../redux/api/electronicsApiSlice";

function Electronics() {
  let { data: enumCategoryData } = useElectronicSourceQuery();

  // shuffle the given data to the random position
  if (enumCategoryData) {
    console.log(enumCategoryData);
  }

  return (
    <div className={styles.sourceContainer}>
      <div className={`${styles.item} item_1`}>
        <div className={`${styles.source}`}>
          <h2 className="source_heading">Consumer electronics and gadgets</h2>
          <button className="source_btn">Source Now</button>
        </div>
      </div>

      {enumCategoryData
        ? enumCategoryData?.map((data, i) => (
            <Box number={i} key={uuid()} data={data} />
          ))
        : ""}
    </div>
  );
}
export default Electronics;
