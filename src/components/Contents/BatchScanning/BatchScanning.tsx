import styles from './styles.module.css';
import emptyPhone from '../../../assets/emptyPhone.svg';
import sheet from '../../../assets/sheet.svg';
import { motion } from 'framer-motion';

const BatchScanning = () => {
  return (
    <div className={styles.container}>
      <motion.div
        className={styles.imageContainer}
        initial={{ y: 500 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        <img src={emptyPhone} alt="Document Scanner" className={styles.image} />
        <motion.div
          className={styles.sheetOneMotion}
          initial={{ y: 400 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3, delay: 0.6 }}
        >
          <img src={sheet} alt="Document Scanner" className={styles.sheetOne} />
        </motion.div>
        <motion.div
          className={styles.sheetTwoMotion}
          initial={{ y: 400 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3, delay: 1 }}
        >
          <img src={sheet} alt="Document Scanner" className={styles.sheetTwo} />
        </motion.div>
        <motion.div
          className={styles.sheetTreeMotion}
          initial={{ y: 400 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3, delay: 1.4 }}
        >
          <img
            src={sheet}
            alt="Document Scanner"
            className={styles.sheetTree}
          />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className={styles.textContainer}
      >
        <h3 className={styles.title}>BATCH SCANNING</h3>
        <h2 className={styles.subtitle}>Multiple Page Scan</h2>
        <p className={styles.description}>
          Scan multiple pages or documents in multiple-scanning mode. Batch all
          scans as a single document.
        </p>
        <button className={styles.learnMoreButton}>Learn More</button>
      </motion.div>
    </div>
  );
};

export default BatchScanning;
