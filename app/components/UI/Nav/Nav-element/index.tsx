import React, { useCallback, useState, useEffect } from 'react';
import { useLocation, Redirect } from 'react-router';
import { Icon } from '@fluentui/react/lib/Icon';

import { Container } from './Nav-element.styles';

interface NaVElType {
  title: string;
  iconName: string;
  route: string;
}

const NavElement: React.FunctionComponent<NaVElType> = (p) => {
  const [redirect, setRedirect] = useState<boolean>(false);
  const location = useLocation();
  const handleClick = useCallback(() => {
    setRedirect(true);
  }, []);

  useEffect(() => {
    redirect && setRedirect(false);
  }, [redirect]);

  return (
    <Container
      title={p.title}
      onClick={handleClick}
      isActive={location.pathname === p.route}
    >
      <Icon iconName={p.iconName} />
      {p.title}
      {redirect && <Redirect to={p.route} />}
    </Container>
  );
};

export default NavElement;
