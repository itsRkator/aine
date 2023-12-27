import { useState } from "react";
import styles from "./Sidenav.module.css";
import { FiUser, FiBook, FiSettings } from "react-icons/fi";
import logo from "../logo.svg";

interface ToolbarProps {
  selectTab: (tabName: string) => void;
}

const Toolbar: React.FC<ToolbarProps> = ({ selectTab }) => {
  const [selectedTab, setSelectedTab] = useState("lessonPlan");

  const clickHandler = (tabName: string) => {
    setSelectedTab(tabName);
    selectTab(tabName);
  };

  return (
    <div className={styles.navItems}>
      <div className={styles.navBanner}>
        <img src={logo} alt="Logo"  />
      </div>
      <button
        className={
          styles.navItem +
          (selectedTab === "students" ? ` ${styles.active}` : "")
        }
        onClick={() => clickHandler("students")}
      >
        <FiUser size={40} />
        Students
      </button>
      <button
        className={
          styles.navItem +
          (selectedTab === "lessonPlan" ? ` ${styles.active}` : "")
        }
        onClick={() => clickHandler("lessonPlan")}
      >
        <FiBook size={40} />
        Lesson Plan
      </button>
      <button
        className={
          styles.navItem +
          (selectedTab === "settings" ? ` ${styles.active}` : "")
        }
        onClick={() => clickHandler("settings")}
      >
        <FiSettings size={40} />
        Settings
      </button>
    </div>
  );
};

export default Toolbar;
