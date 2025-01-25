import React from 'react';

interface HomeTabbarProps {
    selectedTab: string;
    onTabSelect: (tab: string) => void;
}
const HomeTabbar = ({selectedTab, onTabSelect}: HomeTabbarProps) => {
  return (
    <div>
      Home Tabbar
    </div>
  )
}

export default HomeTabbar;
