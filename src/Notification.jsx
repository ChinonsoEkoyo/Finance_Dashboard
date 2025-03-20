import styles from "./Settings.module.css";

export default function Notification() {
  return (
    <div className={styles.contentAreaContainer}>
      <div className={styles.titleAndSubtextContainer}>
        <h2>My Notifications</h2>
        <p>Manage your notifications here.</p>
      </div>

      <div className={styles.myNotificationSection}>
        <div className={styles.notifyMeWhenContainer}>
          <h4>Notify me when...</h4>
          <form className={styles.formCheckBoxesContainer}>
            <label>
              <input type="checkbox" />I receive a new payment
            </label>
            <label>
              <input type="checkbox" />
              I've my weekly/monthly summary reports.
            </label>
            <label>
              <input type="checkbox" />
              Dividends are received.
            </label>
            <label>
              <input type="checkbox" />
              There's an update to my account settings.
            </label>
            <label>
              <input type="checkbox" />A new feature is introduced.
            </label>
            <label>
              <input type="checkbox" />
              There's something that needs my attention.
            </label>
            <label>
              <input type="checkbox" />
              Expenses outweighs my income
            </label>
            <label>
              <input type="checkbox" />
              My portfolio value changes significantly.
            </label>
            <label>
              <input type="checkbox" />A recurring expense is due.
            </label>
          </form>
        </div>

        {/* <div className={styles.horizontalDividier}></div> */}
      </div>
    </div>
  );
}