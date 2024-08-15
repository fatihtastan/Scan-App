import React, { Suspense } from 'react';
import styles from './styles.module.css';

const DocumentScanner = React.lazy(
  () => import('../Contents/DocumentScanner/DocumentScanner'),
);
const SignAndStamp = React.lazy(
  () => import('../Contents/SignAndStamp/SignAndStamp'),
);
const BatchScanning = React.lazy(
  () => import('../Contents/BatchScanning/BatchScanning'),
);
const AdvancedFilters = React.lazy(
  () => import('../Contents/AdvancedFilters/AdvancedFilters'),
);
const ExportAndShare = React.lazy(
  () => import('../Contents/ExportAndShare/ExportAndShare'),
);

interface TabContentProps {
  activeTab: number;
}

const TabContent = ({ activeTab }: TabContentProps) => {
  const renderActiveTab = () => {
    switch (activeTab) {
      case 0:
        return <DocumentScanner />;

      case 1:
        return <SignAndStamp />;

      case 2:
        return <BatchScanning />;

      case 3:
        return <AdvancedFilters />;

      case 4:
        return <ExportAndShare />;

      default:
        return <DocumentScanner />;
    }
  };
  return (
    <div className={styles.tabContent}>
      <Suspense>{renderActiveTab()}</Suspense>
    </div>
  );
};

export default React.memo(TabContent);
