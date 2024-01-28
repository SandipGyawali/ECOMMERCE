import styles from "../../styles/header.module.css";

function Subscribe() {
  return (
    <div id="subscribe" className={styles.box}>
      <h1>Subscribe on our newsletter</h1>
      <span>
        Get daily news on upcoming offers from many suppliers all over the world
      </span>
      <div>
        <input type="text" />
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default Subscribe;
