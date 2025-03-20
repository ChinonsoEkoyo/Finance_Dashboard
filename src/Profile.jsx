import  Avatar  from "react-avatar";
import { AiOutlineEdit } from "react-icons/ai";
import styles from "./Settings.module.css";

export default function Profile() {
  return (
    <div className={styles.contentAreaContainer}>
      <div className={styles.titleAndSubtextContainer}>
        <h2>My profile</h2>
        <p>Manage your photo and personal information.</p>
      </div>

      <div className={styles.myProfileSection}>
        <div className={styles.addProfilePhoto}>
          <Avatar name="Zikora Ekoyo" size="80" color="#2D3A47" fgColor="#FFFFFF" round={true} />
          <button>
            Edit <AiOutlineEdit color="#4e4e4e" fontSize="1rem" />
          </button>
        </div>
        <div className={styles.fullnameAndEmailContainer}>
          <div className={styles.fullnameContainer}>
            <p>Full name</p>
            <h4>Zikora Ekoyo</h4>
          </div>
          <div className={styles.emailContainer}>
            <p>Email address</p>
            <h4>ZikoraEkoyo@testmail.com</h4>
          </div>
        </div>
        {/* <div className={styles.horizontalDividier}></div> */}
      </div>
    </div>
  );
}