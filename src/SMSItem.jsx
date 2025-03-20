import PropTypes from "prop-types";
import styles from "./SMSItem.module.css";
// import moreDetailsIcon from "../../assets/arrow-forward-icon.svg";

export default function SMSItem({
  icon,
  smsTitle,
  smsDescription,
  smsTimeStamp,
  iconContainerStyle,
}) {
  return (
    <div className={styles.smsItemContainer}>
      <div className={styles.leftContentContainer}>
        <div className={`${styles.iconContainer} ${styles[iconContainerStyle]}`}>{icon}</div>
        <div className={styles.smsDetailsContainer}>
          <div className={styles.titleDescriptionContainer}>
            <h3>{smsTitle}</h3>
            <p>{smsDescription}</p>
          </div>
          <p className={styles.smsTimeText}>{smsTimeStamp}</p>
        </div>
      </div>
      <div className={styles.rightContent}>
        <div className={styles.smsReadOrUnreadNotifierIcon}></div>
        {/* <img src={moreDetailsIcon} alt="more Icon" /> */}
      </div>
    </div>
  );
}

SMSItem.propType = {
  icon: PropTypes.any,
  smsTitle: PropTypes.string,
  smsDescription: PropTypes.string,
  smsTimeStamp: PropTypes.string,
  iconContainerStyle: PropTypes.string,
};