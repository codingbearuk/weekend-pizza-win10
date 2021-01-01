import React from 'react';
import { ProgressCircle } from 'react-desktop/windows';

import { Container, LoadingContainer, OrderContainer } from './Home.styles';
import { VievType, Order as OrderType } from './Home.types';
import { red } from '../../constants/colors';
import Order from './Order';

const View: React.FunctionComponent<VievType> = (p) => {
  return (
    <Container>
      <h1>Orders list</h1>
      {p.state.isLoading ? (
        <LoadingContainer>
          <ProgressCircle color={red} size={80} />
        </LoadingContainer>
      ) : (
        <OrderContainer>
          {p.state.orders.map((order: OrderType) => (
            <Order key={order._id} {...order} />
          ))}
        </OrderContainer>
      )}
    </Container>
  );
};

export default View;
