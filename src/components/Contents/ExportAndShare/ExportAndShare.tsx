import styles from './styles.module.css';
import phone from '../../../assets/sharePhone.svg';
import arrow from '../../../assets/arrow.svg';
import pdf from '../../../assets/pdf.svg';
import jpg from '../../../assets/jpg.svg';
import txt from '../../../assets/txt.png';
import { motion } from 'framer-motion';

const ExportAndShare = () => {
  return (
    <div className={styles.container}>
      <motion.div
        className={styles.imageContainer}
        initial={{ y: 500 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        <div style={{ position: 'relative' }}>
          <img src={phone} alt="Document Scanner" className={styles.image} />

          <motion.img
            src={arrow}
            alt="Document Scanner"
            className={styles.arrow}
            initial={{ y: 250, opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.2, delay: 1 }}
          />
          <motion.img
            src={pdf}
            alt="Document Scanner"
            className={styles.pdf}
            initial={{ y: 250, opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.2, delay: 1.2 }}
          />
          <motion.img
            src={jpg}
            alt="Document Scanner"
            className={styles.jpg}
            initial={{ y: 250, opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.2, delay: 1.4 }}
          />
          <motion.img
            src={txt}
            alt="Document Scanner"
            className={styles.txt}
            initial={{ y: 250, opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.2, delay: 1.6 }}
          />
        </div>
      </motion.div>
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className={styles.textContainer}
      >
        <h3 className={styles.title}>EXPORT & SHARE</h3>
        <h2 className={styles.subtitle}>All-Round Conversion</h2>
        <p className={styles.description}>
          Export your scans as PDF,JPG,ZIP,TXT and Word.
        </p>
        <button className={styles.learnMoreButton}>Learn More</button>
      </motion.div>
    </div>
  );
};

export default ExportAndShare;
