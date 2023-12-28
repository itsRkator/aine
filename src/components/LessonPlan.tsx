import { ChangeEvent, useRef } from "react";
import styles from "./General.module.css";
import { FiChevronLeft } from "react-icons/fi";

const LessonPlan = () => {
  let fileInputRef = useRef<HTMLInputElement>(null);

  const uploadClickHandler = () => {
    fileInputRef.current?.click();
  };
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files?.[0];
    console.log(uploadedFile);
  };

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
      <button
        type="button"
        className={styles.uploadBox}
        onClick={uploadClickHandler}
      >
        Upload
      </button>
      <input
        ref={fileInputRef}
        style={{ display: "none" }}
        type="file"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default LessonPlan;
