import React from 'react';
import { ProgressCircle } from 'react-desktop/windows';

import { Container, Content } from './OrderArchive.styles';
import Order from '../Home/Order';
import { Order as OrderType } from '../Home/Home.types';
import { red } from '../../constants/colors';

interface ViewType {
  state: {
    isLoading: boolean;
    archive: OrderType[];
  };
}

const View: React.FunctionComponent<ViewType> = (p) => {
  return (
    <Container>
      <h1>Order Archive</h1>
      {p.state.isLoading ? (
        <ProgressCircle color={red} size={80} />
      ) : (
        <Content>
          {p.state.archive.map((element) => (
            <Order key={element._id} {...element} archive />
          ))}
        </Content>
      )}
    </Container>
  );
};

export default View;
