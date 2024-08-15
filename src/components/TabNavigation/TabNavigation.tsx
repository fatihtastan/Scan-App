import styles from './styles.module.css';
import { motion } from 'framer-motion';
import Icon from '../Icon/Icon';

interface TabNavigationProps {
  setActiveTab: (index: number) => void;
  activeTab: number;
}
const tabs = [
  'Document Scanner',
  'Sign & Stamp',
  'Batch Scanning',
  'Advanced Filters',
  'Export & Share',
];
const icons = ['document', 'sign', 'batch', 'filters', 'exportShare'] as const;

const TabNavigation = ({ setActiveTab, activeTab }: TabNavigationProps) => {
  return (
    <div className={styles.tabNavigation}>
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`${styles.tabButton} ${activeTab === index ? styles.active : ''}`}
          onClick={() => setActiveTab(index)}
        >
          <svg width="80" height="80" viewBox="0 0 80 80">
            <motion.circle
              cx="40"
              cy="40"
              r="35"
              stroke={'#0381FF'}
              strokeWidth="2"
              fill="transparent"
              initial={{ pathLength: 0 }}
              animate={
                activeTab === index ? { pathLength: 1, rotate: -360 } : {}
              }
              transition={{ duration: 2 }}
            />
            <svg
              className={styles.svgCircle}
              width="80"
              height="80"
              viewBox="0 0 80 80"
            >
              <motion.circle
                cx="40"
                cy="40"
                r="35"
                stroke={'#00000014'}
                strokeWidth="2"
                fill="transparent"
                initial={{ pathLength: 1 }}
              />
            </svg>
            <Icon name={icons[index]} active={activeTab === index} />
          </svg>
          <span>{tab}</span>
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;
