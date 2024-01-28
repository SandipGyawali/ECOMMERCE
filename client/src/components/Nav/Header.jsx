import styles from "../../styles/header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faMessage,
  faUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header id="navbar-main" className={styles.navMain}>
      <div id="navbar" className={styles.navContainer}>
        <div className={styles.navLeft}>
          <span className={styles.brandName}>Brand</span>
        </div>
        <div className={styles.navFill}>
          <input
            type="text"
            placeholder="Search"
            className={styles.searchBox}
          />
          <select name="categort" id="category" className={styles.categoryList}>
            <option value="all">All Category</option>
          </select>
          <button className={styles.submitBtn}>Submit</button>
        </div>
        <div className={styles.navRight}>
          <div className={styles.redirectNav}>
            <FontAwesomeIcon icon={faCartShopping} className={styles.icon} />
            <span className={styles.iconName}>Cart</span>
          </div>

          <div className={styles.redirectNav}>
            <FontAwesomeIcon icon={faHeart} className={styles.icon} />
            <span className={styles.iconName}>Orders</span>
          </div>

          <div className={styles.redirectNav}>
            <FontAwesomeIcon icon={faMessage} className={styles.icon} />
            <span className={styles.iconName}>Message</span>
          </div>

          <div className={styles.redirectNav}>
            <FontAwesomeIcon icon={faUser} className={styles.icon} />
            <span className={styles.iconName}>User</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
