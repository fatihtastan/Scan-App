import styles from './styles.module.css';
import phone from '../../../assets/signPhone.svg';
import completed from '../../../assets/completed.svg';
import banner from '../../../assets/signBanner.svg';
import { motion } from 'framer-motion';

const SignAndStamp = () => {
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
            src={completed}
            alt="Document Scanner"
            className={styles.completed}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.2, delay: 1.3 }}
          />
          <motion.img
            src={banner}
            alt="Document Scanner"
            className={styles.banner}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.2, delay: 1 }}
          />
        </div>
      </motion.div>
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className={styles.textContainer}
      >
        <h3 className={styles.title}>SIGN & STAMP</h3>
        <h2 className={styles.subtitle}>One-Tap Focus</h2>
        <p className={styles.description}>
          Draw, scan or import your signature and stamp with a simple touch.
          Sign and stamp any document with just a single tap!
        </p>
        <button className={styles.learnMoreButton}>Learn More</button>
      </motion.div>
    </div>
  );
};

export default SignAndStamp;
