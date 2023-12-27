import styles from "./General.module.css";
import { FiChevronLeft } from "react-icons/fi";

const LessonPlan = () => {
  return (
    <div className={styles.content}>
      <p className={styles.titleText}>
        <FiChevronLeft />
        Videos
      </p>
      <div className={styles.container}>
        <input className={styles.inputField} placeholder="Insert URL here" />
        <p>Or</p>
      </div>
      <div className={styles.uploadBox}>Upload</div>
    </div>
  );
};

export default LessonPlan;
