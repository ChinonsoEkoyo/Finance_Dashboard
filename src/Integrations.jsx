
import { MdOutlineChevronRight } from "react-icons/md";
import styles from "./Settings.module.css";
import bankIcon from "./assets/bankicon.svg";
import bitcoinIcon from "./assets/bitcoin.svg";

export default function Integrations() {
  return (
    <div className={styles.contentAreaContainer}>
      <div className={styles.titleAndSubtextContainer}>
        <h2>My Integrations</h2>
        <p>Connect your bank account and crypto wallet for easy tracking.</p>
      </div>

      <div className={styles.intergationsContainer}>
        <div className={styles.myIntegrationItemContainer}>
          <div className={styles.leftContentContainer}>
            <img src={bankIcon} alt="bank" />

            <div className={styles.integrationTitleSubtextAndButtonContainer}>
              <div className={styles.integrationTitleAndSubtextContainer}>
                <h4>Bank</h4>
                <p>Add your bank account to manage and track your finances.</p>
              </div>
              <button>
                Disconnect <MdOutlineChevronRight color="#5c5c5c" fontSize="1rem" />
              </button>
            </div>
          </div>

          <button className={styles.connected}>Connected</button>

          {/* <div className={styles.horizontalDividier}></div> */}
        </div>

        <div className={styles.myIntegrationItemContainer}>
          <div className={styles.leftContentContainer}>
            <img src={bitcoinIcon} alt="crypto" />

            <div className={styles.integrationTitleSubtextAndButtonContainer}>
              <div className={styles.integrationTitleAndSubtextContainer}>
                <h4>Crypto wallet</h4>
                <p>Link your crypto wallet to track your digital assets.</p>
              </div>
              <button>
                Disconnect <MdOutlineChevronRight color="#5c5c5c" fontSize="1rem" />
              </button>
            </div>
          </div>

          <button className={styles.connected}>Connected</button>

          {/* <div className={styles.horizontalDividier}></div> */}
        </div>
      </div>
    </div>
  );
}