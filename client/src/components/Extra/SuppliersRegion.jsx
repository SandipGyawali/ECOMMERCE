import styles from "../../styles/supplierRegion.module.css";
import Region from "./Region";

function SupplierRegion() {
  return (
    <div className={styles.supplier} id="supplier_region">
      <div className={styles.supplierContainer}>
        <div>
          <h2>Suppliers by region</h2>
        </div>

        <div className={styles.supplierWrapper}>
          <Region img_src="/united-arab-emirates.png" name="Arabic Emirates" />
          <Region img_src="/denmark.png" name="Denmark" />
          <Region img_src="/china.png" name="China" />
          <Region img_src="/united-kingdom.png" name="United Kingdom" />
          <Region img_src="/united-states.png" name="United States" />
          <Region img_src="/russia.png" name="Russia" />
          <Region img_src="/france.png" name="France" />
          <Region img_src="/italy.png" name="Italy" />
          <Region img_src="/united-arab-emirates.png" name="Arabic Emirates" />
          <Region img_src="/australia.png" name="Australia" />
        </div>
      </div>
    </div>
  );
}

export default SupplierRegion;
