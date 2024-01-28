import {
  faHome,
  faBars,
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
import Option from "./Option";
import Line from "./Line";

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
      <Line />

      <div className={styles.sideBarOptions}>
        <Option icon={faHome} name="Rank" />
        <Option icon={faBars} name="Categories" />
        <Option icon={faStar} name="Favorite" />
        <Option icon={faUser} name="User" />
      </div>

      <Line />

      <div className={styles.sideBarOptions}>
        <Option icon={faGlobe} name="English | USD" />
        <Option icon={faHeadphones} name="Contact Us" />
        <Option icon={faBuilding} name="About" />
      </div>

      <Line />

      <div className={styles.sideBarOptions}>
        <Option icon={faHandshakeSimple} name="Partnership" />
        <Option icon={faFile} name="User agreement" />
        <Option icon={faShieldHalved} name="Privacy Policy" />
      </div>
    </div>
  );
}

export default SideBar;
