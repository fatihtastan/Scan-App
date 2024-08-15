import React, { useState } from 'react';
import TabContent from './TabContent/TabContent';
import TabNavigation from './TabNavigation/TabNavigation';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <TabContent activeTab={activeTab} />
      <TabNavigation setActiveTab={setActiveTab} activeTab={activeTab} />
    </>
  );
};

export default Tabs;
