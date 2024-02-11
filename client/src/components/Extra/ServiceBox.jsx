/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/extraService.module.css";

function ServiceBox({ description, icon, imgPath }) {
  return (
    <div className={styles.serviceBoxContainer} id="box_container">
      <img src={imgPath} alt="extra-img" className={styles.extraServiceImg} />
      <div className={styles.serviceBox}>
        <span className="serviceDescription">{description}</span>
        <FontAwesomeIcon icon={icon} className={styles.extraServiceIcon} />
      </div>
    </div>
  );
}

export default ServiceBox;
