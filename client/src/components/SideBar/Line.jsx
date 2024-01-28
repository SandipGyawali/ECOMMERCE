import styles from "../../styles/sideBar.module.css";

function Line() {
  return (
    <div>
      <div className={styles.line} data-testid="line"></div>
    </div>
  );
}

export default Line;
