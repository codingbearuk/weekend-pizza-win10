import React from 'react';

import View from './Sidebar.view';

interface SidebarType {
  isMaximized: boolean;
}

const Sidebar: React.FunctionComponent<SidebarType> = (p) => {
  return View({ isMaximized: p.isMaximized });
};

export default Sidebar;
