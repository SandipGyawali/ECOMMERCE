/* eslint-disable react/prop-types */
import styles from "../../styles/supplierRegion.module.css";

function Region({ img_src, name }) {
  return (
    <div className={styles.regionContainer}>
      <img src={img_src} alt="country_flag" width={32} height={32} />
      <div className={styles.supplierInfo}>
        <span className={styles.supplierTitle}>{name}</span>
        <span className={styles.supplierUrl}>shopname.ae</span>
      </div>
    </div>
  );
}

export default Region;
