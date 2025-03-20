import { CiSearch } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import { IoNotificationsOutline } from "react-icons/io5";
import { PiPlugs, PiSlidersHorizontalDuotone } from "react-icons/pi";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./Settings.module.css";
import { useState } from "react";

export default function Settings(){
  const [isMenuActive, setIsMenuActive] = useState("profile");

  function handleClick(tabName) {
    setIsMenuActive(tabName);
  }

  return (
    <div className={styles.settingsContainer}>
    <aside className={styles.settingsSidebar}>
      <h2>Settings</h2>
      <div className={styles.searchBar}>
        <CiSearch className={styles.searchIcon} />
        <input type="text" placeholder="search..." />
      </div>
      <div className={styles.settingsSidebarLinksContainer}>
        {/* profile */}

        <NavLink
          to={"profile"}
          onClick={() => handleClick("profile")}
          className={isMenuActive === "profile" ? styles.menuIsActive : ""}
        >
          <div className={styles.menuItemContainer}>
            <RxAvatar className={styles.menuItemIcon} />
            <p>Profile</p>
          </div>
        </NavLink>

        {/* notification */}
        <NavLink
          to={"notification"}
          onClick={() => handleClick("notification")}
          className={isMenuActive === "notification" ? styles.menuIsActive : ""}
        >
          <div className={styles.menuItemContainer}>
            <IoNotificationsOutline className={styles.menuItemIcon} />
            <p>Notification</p>
          </div>
        </NavLink>

        {/* preference */}
        <NavLink
          to={"preference"}
          onClick={() => handleClick("preference")}
          className={isMenuActive === "preference" ? styles.menuIsActive : ""}
        >
          <div className={styles.menuItemContainer}>
            <PiSlidersHorizontalDuotone className={styles.menuItemIcon} />
            <p>Preference</p>
          </div>
        </NavLink>

        {/* integrations

         */}
        <NavLink
          to={"integration"}
          onClick={() => handleClick("integration")}
          className={isMenuActive === "integration" ? styles.menuIsActive : ""}
        >
          <div className={styles.menuItemContainer}>
            <PiPlugs className={styles.menuItemIcon} />
            <p>Integrations</p>
          </div>
        </NavLink>
      </div>
    </aside>

    <main className={styles.settingsContent}>
        <Outlet />
    </main>
    </div>
  );
}