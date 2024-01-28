import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styles from "../../styles/sideBar.module.css";

function Option({ icon, name }) {
  return (
    <div className={styles.option}>
      <FontAwesomeIcon icon={icon} className={styles.sideBarIcon} />
      <Link to="/">{name}</Link>
    </div>
  );
}

export default Option;
