import ServiceBox from "./ServiceBox";
import {
  faSearch,
  faBox,
  faPlane,
  faShield,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/extraService.module.css";

function ExtraServices() {
  return (
    <div className={styles.serviceContainer} id="serve_container">
      <div className="serviceWrapper">
        <div className="serviceTitle">
          <h2>Our extra Services</h2>
        </div>
        <div className={styles.serviceBoxWrapper}>
          <ServiceBox
            description="Source from Industry Hubs"
            icon={faSearch}
            imgPath="/custom.jpg"
          />
          <ServiceBox
            description="Customize Your Products"
            icon={faBox}
            imgPath="/cargo.jpg"
          />
          <ServiceBox
            description="Fast, reliable shipping by ocean or air"
            icon={faPlane}
            imgPath="/shipping.jpg"
          />
          <ServiceBox
            description="Product monitoring and inspection"
            icon={faShield}
            imgPath="/warehouse.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default ExtraServices;
