import React from "react";
import styles from './SomeFeatures.module.scss'
import { CiUser } from "react-icons/ci";

const SomeFeatures = () => {
  return (
    <div className={styles.features}>
      <div className={styles.container}>
        <div className={styles.featuresTop}>
          <h1>Some Features that Made us Unique</h1>
          <p>Who are in extremely love with eco friendly system.</p>
        </div>
        <div className={styles.featuresBottom}>
          <div className={styles.featuresBottomCard}>
            <h1> <CiUser /> Expert Technicians</h1>
            <p>
              Usage of the Internet is becoming more common due to rapid
              advancement of technology and power.
            </p>
          </div>
          <div className={styles.featuresBottomCard}>
            <h1> <CiUser /> Expert Technicians</h1>
            <p>
              Usage of the Internet is becoming more common due to rapid
              advancement of technology and power.
            </p>
          </div>
          <div className={styles.featuresBottomCard}>
            <h1> <CiUser /> Expert Technicians</h1>
            <p>
              Usage of the Internet is becoming more common due to rapid
              advancement of technology and power.
            </p>
          </div>
          <div className={styles.featuresBottomCard}>
            <h1> <CiUser /> Expert Technicians</h1>
            <p>
              Usage of the Internet is becoming more common due to rapid
              advancement of technology and power.
            </p>
          </div>
          <div className={styles.featuresBottomCard}>
            <h1> <CiUser /> Expert Technicians</h1>
            <p>
              Usage of the Internet is becoming more common due to rapid
              advancement of technology and power.
            </p>
          </div>
          <div className={styles.featuresBottomCard}>
            <h1> <CiUser /> Expert Technicians</h1>
            <p>
              Usage of the Internet is becoming more common due to rapid
              advancement of technology and power.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SomeFeatures;
