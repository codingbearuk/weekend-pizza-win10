import React, { useCallback, useEffect, useState } from 'react';

import View from './OrderArchive.view';
import { Order } from '../Home/Home.types';
import GET from '../../utils/api-comunication/get';

const OrderArchive: React.FunctionComponent = (p) => {
  const [archive, setArchive] = useState<Order[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  const getArchive = useCallback(async () => {
    const data = await GET('/archive');
    setArchive(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    getArchive();
  }, []);

  return View({
    state: { isLoading, archive },
  });
};

export default OrderArchive;
