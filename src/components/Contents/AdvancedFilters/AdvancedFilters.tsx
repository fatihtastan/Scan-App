import styles from './styles.module.css';
import phone from '../../../assets/signPhone.svg';
import rightBar from '../../../assets/rightBar.svg';
import leftBar from '../../../assets/leftBar.svg';
import { motion } from 'framer-motion';

const AdvancedFilters = () => {
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
            src={leftBar}
            alt="Document Scanner"
            className={styles.leftBar}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.2, delay: 1 }}
          />
          <motion.img
            src={rightBar}
            alt="Document Scanner"
            className={styles.rightBar}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.2, delay: 1.3 }}
          />
        </div>
      </motion.div>
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className={styles.textContainer}
      >
        <h3 className={styles.title}>ADVANCE FILTER</h3>
        <h2 className={styles.subtitle}>Unique Filters</h2>
        <p className={styles.description}>
          Apply advanced filters and enhance quality with various custom made
          filters. Manually edit brightness and contrast by your own choice on
          the custom filters.
        </p>
        <button className={styles.learnMoreButton}>Learn More</button>
      </motion.div>
    </div>
  );
};

export default AdvancedFilters;
