import styles from "../../styles/header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faMessage,
  faUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { show } from "../../redux/slice/sideBar";
import { useIsValidTokenQuery } from "../../redux/api/userApiSlice";

function Header() {
  const { data } = useIsValidTokenQuery();
  const dispatch = useDispatch();

  return (
    <header id="navbar-main" className={styles.navMain}>
      <div id="navbar" className={styles.navContainer}>
        <div className={styles.navLeft}>
          <FontAwesomeIcon
            icon={faBars}
            className={styles.headerBar}
            onClick={() => dispatch(show())}
          />
          <span className={styles.brandName}>Brand</span>
        </div>
        <div className={styles.navFill}>
          <input
            type="text"
            placeholder="Search"
            className={styles.searchBox}
          />
          <select name="category" id="category" className={styles.categoryList}>
            <option value="all">All</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="furniture">Furniture</option>
            <option value="kitchen">Kitchen</option>
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
            {data?.isValid ? (
              <>
                <img
                  src="/images/profile.png"
                  alt="profile-img"
                  className={styles.profileImg}
                />
                <span className={styles.iconName}>User</span>
              </>
            ) : (
              <>
                <FontAwesomeIcon icon={faUser} className={styles.icon} />
                <span className={styles.iconName}>User</span>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
