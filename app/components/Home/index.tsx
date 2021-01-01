import React, { useCallback, useEffect, useState } from 'react';
import io from 'socket.io-client';

import View from './Home.view';
import { Order } from './Home.types';

const Home: React.FunctionComponent = (p) => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [orders, setOrders] = useState<[] | Array<Order>>([]);

  const getOrdersList = useCallback(() => {
    const socket = io('http://vps-a3dcf2e1.vps.ovh.net:3030/');

    socket.on('connect', () => {
      console.info(`socket connected succesfully with id ${socket.id}`);
      socket.emit('get-orders');
      socket.on('order-list', (args: any) => {
        const orders: Array<Order> = JSON.parse(args);
        setOrders(orders);
        setLoading(false);
      });
      document.addEventListener('edit-status-success', () => {
        socket.emit('get-orders');
      });
    });
  }, []);

  useEffect(() => {
    getOrdersList();
  }, []);

  return View({
    state: { isLoading, orders },
  });
};

export default Home;
