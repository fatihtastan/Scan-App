import React from 'react';
import styles from './App.module.css';
import Tabs from './components/Tabs';

export const App: React.FC = () => {
  return (
    <main className={styles.main}>
      <Tabs />
    </main>
  );
};
