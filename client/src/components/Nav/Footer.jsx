import styles from "../../styles/footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footerContainer">
      <div className={styles.footerUp}>
        {/* one */}
        <div className={styles.footerFirst}>
          <h2 className={styles.brandName}>Brand</h2>
          <span className={styles.firstDesc}>
            Best information about the company gies here but now lorem ipsum is
          </span>
          <div className={styles.icon}>
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faYoutube} />
          </div>
        </div>

        {/* two */}
        <div className={styles.footerMiddle}>
          <div className={styles.footerSecond}>
            <div className={styles.rWrap}>
              <span className={styles.redirectTitle}>About</span>
              <div className={styles.subRWrap}>
                <span>About Us</span>
                <span>Find Store</span>
                <span>Categories</span>
                <span>About Us</span>
              </div>
            </div>
          </div>
          <div className={styles.footerSecond}>
            <div className={styles.rWrap}>
              <span className={styles.redirectTitle}>Partnership</span>
              <div className={styles.subRWrap}>
                <span>About Us</span>
                <span>Find Store</span>
                <span>Categories</span>
                <span>About Us</span>
              </div>
            </div>
          </div>
          <div className={styles.footerSecond}>
            <div className={styles.rWrap}>
              <span className={styles.redirectTitle}>Information</span>
              <div className={styles.subRWrap}>
                <span>About Us</span>
                <span>Find Store</span>
                <span>Categories</span>
                <span>About Us</span>
              </div>
            </div>
          </div>
        </div>

        {/* three */}
        <div className={styles.getApp}>
          <span className={styles.redirectTitle}>GetApp</span>
          <div className="footerImgWrapper">
            <img src="/images/appleStore.png" alt="get-img" />
            <br />
            <img src="/images/playStore.png" alt="get-img" />
          </div>
        </div>
      </div>
      <div className={styles.footerDown}>
        <span>© 2024 Ecommerce. </span>
      </div>
    </div>
  );
}

export default Footer;
