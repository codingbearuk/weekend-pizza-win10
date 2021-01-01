import React from 'react';
import { Icon } from '@fluentui/react/lib/Icon';
import { Button, ProgressCircle } from 'react-desktop/windows';

import {
  Container,
  OrderDetails,
  NewLabel,
  CartList,
  ActionButtonsContainer,
} from './Order.styles';
import Separator from '../../UI/Separator';
import { CartItem } from '../Home.types';

interface ViewType {
  orderID: string;
  isNew: boolean;
  orderStatus: string;
  paid: boolean;
  isOpen: boolean;
  isStatusButtonActive: boolean;
  address: {
    address: string;
    postcode: string;
    city: string;
    phone: string;
  };
  deliveryDate: Date;
  cart: Array<CartItem>;
  total: number;
  buttonText: string;
  statusBtnLoading: boolean;
  handlers: {
    handleOpenOrder: VoidFunction;
    handleEditStatus: VoidFunction;
    handleArchiveOrder: VoidFunction;
  };
}

const View: React.FunctionComponent<ViewType> = (p) => {
  const date: string = `${p.deliveryDate.getDate()}/${
    p.deliveryDate.getMonth() + 1
  }/${p.deliveryDate.getFullYear()}`;
  const time: string = `${p.deliveryDate.getHours()}:${p.deliveryDate.getMinutes()}`;

  return (
    <Container
      isOpen={p.isOpen}
      isNew={p.isNew}
      isDelivered={p.orderStatus === 'delivered'}
    >
      {p.isNew && <NewLabel>NEW</NewLabel>}
      <h2 onClick={p.handlers.handleOpenOrder}>
        ORDER ID: {p.orderID}
        <Separator width={10} />
        <Icon iconName={!p.isOpen ? 'ChevronDown' : 'ChevronUp'} />
      </h2>
      {p.isOpen && (
        <OrderDetails>
          <section>
            <Icon iconName="CommentSolid" title="order status" />
            <p>{p.orderStatus}</p>
          </section>
          <section>
            <Icon iconName="Money" title="payment status" />
            <p>{p.paid ? 'paid' : 'pending payment'}</p>
          </section>
          <section>
            <Icon iconName="DeliveryTruck" title="delivery address" />
            <p>
              {p.address.address} {p.address.city} {p.address.postcode}
            </p>
          </section>
          <section>
            <Icon iconName="CellPhone" title="contact phone" />
            <p>{p.address.phone}</p>
          </section>
          <section>
            <Icon iconName="Money" title="order total price" />
            <p>£{(p.total / 100).toFixed(2)}</p>
          </section>
          <section>
            <Icon iconName="DateTime" title="delivery date & time" />
            <p>
              {date}, {time}
            </p>
          </section>
          <CartList>
            <div>
              <Icon iconName="ClipboardList" title="order list" />
              <h3>Order list</h3>
            </div>
            {p.cart.map((item) => (
              <p key={item._id}>
                <Icon iconName="CheckMark" />
                {item.name},
                <strong>
                  {item.size ? 'size' : 'amount'}:{' '}
                  {item.size ? item.size[0].toUpperCase() : item.amount}
                </strong>
                ,
              </p>
            ))}
          </CartList>
          <ActionButtonsContainer>
            {p.isStatusButtonActive && (
              <>
                <Button push onClick={p.handlers.handleEditStatus}>
                  {p.statusBtnLoading ? <ProgressCircle /> : p.buttonText}
                </Button>
                <Separator width={10} />
              </>
            )}
            <Button push onClick={p.handlers.handleArchiveOrder}>
              archive order
            </Button>
          </ActionButtonsContainer>
        </OrderDetails>
      )}
    </Container>
  );
};

export default View;
