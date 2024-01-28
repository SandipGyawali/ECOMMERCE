import { Link } from "react-router-dom";
import {
  faHome,
  faBars,
  faHeart,
  faStar,
  faXmark,
  faUser,
  faShieldHalved,
  faHandshakeSimple,
  faFile,
  faGlobe,
  faHeadphones,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/sideBar.module.css";
import { useSelector, useDispatch } from "react-redux";
import { hide } from "../../redux/slice/sideBar";

function SideBar() {
  const dispatch = useDispatch();
  const showSideBar = useSelector((state) => state.sideBar.show);
  return (
    <div
      id="sidebar"
      className={`${styles.sideBarContainer} ${
        showSideBar ? styles.show : styles.hide
      }`}
    >
      <FontAwesomeIcon
        icon={faXmark}
        onClick={() => dispatch(hide())}
        className={styles.xmark}
      />
      <h2 className={styles.sideBarLogo}>Brand</h2>

      <div>
        <div className={styles.line}></div>
      </div>

      <div className={styles.sideBarOptions}>
        <div className={styles.option}>
          <FontAwesomeIcon icon={faHome} className={styles.sideBarIcon} />
          <Link to="/">Rank</Link>
        </div>

        <div className={styles.option}>
          <FontAwesomeIcon icon={faBars} className={styles.sideBarIcon} />
          <Link to="/">Categories</Link>
        </div>

        <div className={styles.option}>
          <FontAwesomeIcon icon={faStar} className={styles.sideBarIcon} />
          <Link to="/">Favorite</Link>
        </div>

        <div className={styles.option}>
          <FontAwesomeIcon icon={faUser} className={styles.sideBarIcon} />
          <Link to="/">User</Link>
        </div>
      </div>

      <div>
        <div className={styles.line}></div>
      </div>

      <div className={styles.sideBarOptions}>
        <div className={styles.option}>
          <FontAwesomeIcon icon={faGlobe} className={styles.sideBarIcon} />
          <Link to="/">English | USD</Link>
        </div>

        <div className={styles.option}>
          <FontAwesomeIcon icon={faHeadphones} className={styles.sideBarIcon} />
          <Link to="/">Contact Us</Link>
        </div>
        <div className={styles.option}>
          <FontAwesomeIcon icon={faBuilding} className={styles.sideBarIcon} />
          <Link to="/">About</Link>
        </div>
      </div>

      <div>
        <div className={styles.line}></div>
      </div>

      <div className={styles.sideBarOptions}>
        <div className={styles.option}>
          <FontAwesomeIcon
            icon={faHandshakeSimple}
            className={styles.sideBarIcon}
          />
          <Link to="/">Partnership</Link>
        </div>
        <div className={styles.option}>
          <FontAwesomeIcon icon={faFile} className={styles.sideBarIcon} />
          <Link to="/">User agreement</Link>
        </div>

        <div className={styles.option}>
          <FontAwesomeIcon
            icon={faShieldHalved}
            className={styles.sideBarIcon}
          />
          <Link to="/">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
