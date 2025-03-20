import styles from "./Settings.module.css";
import { IoIosArrowDown } from "react-icons/io";

export default function Preference() {
  return (
    <div className={styles.contentAreaContainer}>
      <div className={styles.titleAndSubtextContainer}>
        <h2>My Preference</h2>
        <p>Manage your preferences here.</p>
      </div>

      <div className={styles.myPreferenceSection}>
        <div className={styles.preferenceCategoryContainer}>
          <div className={styles.preferenceTitleAndSubtexts}>
            <h4>Appearance</h4>
            <p>Customize how the theme looks on your device</p>
          </div>
          <div className={styles.selectDropdownContainer}>
            <select name="appearance">
              <option value="light">System</option>
              <option value="dark">Light</option>
              <option value="system">Dark</option>
            </select>
            <IoIosArrowDown pointerEvents="none" />
          </div>
        </div>

        <div className={styles.horizontalDividier}></div>
        <div className={styles.addProfilePhoto}>
          <div className={styles.preferenceTitleAndSubtexts}>
            <h4>Language</h4>
            <p>Select your preferred language</p>
          </div>
          <div className={styles.selectDropdownContainer}>
            <select name="appearance">
              <option value="english">English</option>
              <option value="french">French</option>
              <option value="spanish">Spanish</option>
            </select>
            <IoIosArrowDown pointerEvents="none" />
          </div>
        </div>
      </div>
    </div>
  );
}