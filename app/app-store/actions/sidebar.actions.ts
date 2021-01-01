import { ActionFunction } from 'app-store';

export const openSidebar: ActionFunction = () => {
  return {
    type: 'open-sidebar',
  };
};

export const closeSidebar: ActionFunction = () => {
  return {
    type: 'close-sidebar',
  };
};
