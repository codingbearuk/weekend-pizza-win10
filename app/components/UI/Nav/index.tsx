import React, { useCallback } from 'react';
import { NavItem } from 'constants/main-navigation';
import { Icon } from '@fluentui/react/lib/Icon';
import { useDispatch, useSelector } from 'react-redux';

import { Container, MenuIcon } from './Nav.styles';
import NavEl from './Nav-element';
import { openSidebar, closeSidebar } from 'app-store/actions/sidebar.actions';

interface NavTypes {
  menu: Array<NavItem>;
}

const Nav: React.FunctionComponent<NavTypes> = (p) => {
  const isSidebarOpen: boolean = useSelector((s: any) => s.sidebar.isOpen);
  const dispatch = useDispatch();

  const handleMenuButton = useCallback(() => {
    if (isSidebarOpen) dispatch(closeSidebar());
    else dispatch(openSidebar());
  }, [isSidebarOpen]);

  return (
    <Container>
      <MenuIcon onClick={handleMenuButton}>
        <Icon iconName="GlobalNavButton" />
      </MenuIcon>
      {p.menu.map((item) => (
        <NavEl key={item.title} {...item} />
      ))}
    </Container>
  );
};

export default Nav;
