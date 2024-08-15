import React from 'react';
import styles from './styles.module.css';
import phone from '../../../assets/phoneDocument.svg';
import { motion } from 'framer-motion';

const DocumentScanner: React.FC = () => {
  return (
    <div className={styles.container}>
      <motion.div
        className={styles.imageContainer}
        initial={{ y: 500 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        <img src={phone} alt="Document Scanner" className={styles.image} />
      </motion.div>
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className={styles.textContainer}
      >
        <p className={styles.title}>DOCUMENT SCANNER</p>
        <p className={styles.subtitle}>Scan with Ease</p>
        <p className={styles.description}>
          Scan any document instantly with your mobile device by just a few
          steps. Save as PDF, JPG, ZIP, TXT and Word format.
        </p>
        <button className={styles.learnMoreButton}>Learn More</button>
      </motion.div>
    </div>
  );
};

export default DocumentScanner;
