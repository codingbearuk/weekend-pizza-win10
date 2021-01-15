import React from 'react';
import { Icon } from '@fluentui/react/lib/Icon';

import { Container } from './element.styles';
import Separator from '../../UI/Separator';

interface ElementType {
  name: string;
  id: string;
  ingrediends?: string[];
  description?: string;
}

const Element: React.FunctionComponent<ElementType> = (p) => {
  return (
    <Container title={p.ingrediends ? p.ingrediends.join(',') : p.description}>
      <Icon iconName="Delete" />
      <Separator width={10} />
      {p.name}
    </Container>
  );
};

export default Element;
