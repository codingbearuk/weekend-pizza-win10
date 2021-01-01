import React from 'react';
import Nav from '../../components/UI/Nav';
import mainNav from '../../constants/main-navigation';
import { Container } from './Sidebar.styles';

const View: React.FunctionComponent<{ isMaximized: boolean }> = (p) => {
  return (
    <Container isMaximized={p.isMaximized}>
      <Nav menu={mainNav} />
    </Container>
  );
};

export default View;
