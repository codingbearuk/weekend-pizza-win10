import React, { useCallback, useEffect, useState } from 'react';

import View from './Order.view';
import { Order as OrderType } from '../Home.types';
import POST from '../../../utils/api-comunication/post';

const Order: React.FunctionComponent<OrderType> = (p) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [isNew, setNew] = useState<boolean>(false);
  const [buttonText, setButtonText] = useState<string>(
    'set status - preparing'
  );
  const [isStatusButtonActive, setStatusButtonActive] = useState<boolean>(true);
  const [statusBtnLoading, setStatusBtnLoading] = useState<boolean>(false);

  const editStatusSuccessEvent = new CustomEvent('edit-status-success');

  const handleOpenOrder = useCallback(() => {
    setOpen(!isOpen);
  }, [isOpen]);

  const handleNewOrderLabelMount = () => {
    if (p.status === 'your order is under realisation') setNew(true);
    else setNew(false);
  };

  const handleButtonTextToDisplay = useCallback(() => {
    if (p.status === 'your order is under realisation')
      setButtonText('set status - preparation');
    else if (p.status === 'preparing')
      setButtonText('set status - in delivery');
    else if (p.status === 'in delivery')
      setButtonText('set status - delivered');
    else if (p.status === 'delivered') {
      setStatusButtonActive(false);
      setButtonText('no status to set');
    }
  }, [p.status]);

  const handleEditStatus = useCallback(async () => {
    setStatusBtnLoading(true);
    let statusToPush: string;
    if (p.status === 'your order is under realisation')
      statusToPush = 'preparing';
    else if (p.status === 'preparing') statusToPush = 'in delivery';
    else if (p.status === 'in delivery') statusToPush = 'delivered';
    console.info(statusToPush);
    try {
      const data: any = await POST('/edit-order-status', {
        id: p.order_id,
        status: statusToPush,
      });
      if (!data) throw new Error('could not fetch');
      if (data.status === 'ok') {
        setStatusBtnLoading(false);
        document.dispatchEvent(editStatusSuccessEvent);
        console.log(data);
      }
    } catch (err) {
      console.error(err);
    }
  }, [p.status]);

  const handleArchiveOrder = useCallback(async () => {
    try {
      const data: any = await POST('/archive-order', { id: p.order_id });
      if (!data) throw new Error('could not archive this order');
      if (data.status === 'ok') {
        document.dispatchEvent(editStatusSuccessEvent);
      }
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(handleNewOrderLabelMount, []);
  useEffect(handleButtonTextToDisplay, [p.status]);

  return View({
    orderID: p.order_id,
    isNew,
    isOpen,
    orderStatus: p.status,
    isStatusButtonActive,
    paid: p.paymentSuccess,
    address: {
      address: p.address.address,
      city: p.address.city,
      postcode: p.address.postcode,
      phone: p.address.phone,
    },
    total: p.totalPrice,
    buttonText,
    deliveryDate: new Date(p.date),
    cart: p.cart,
    handlers: { handleOpenOrder, handleEditStatus, handleArchiveOrder },
    statusBtnLoading,
  });
};

export default Order;
