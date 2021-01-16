import React, { useCallback, useState, useEffect } from 'react';
import { remote } from 'electron';

import View from './Remove.view';
import GET from '../../utils/api-comunication/get';
import DEL from '../../utils/api-comunication/delete';
import { PizzaType, SauceType } from './Remove.t';

const Remove: React.FunctionComponent = (p) => {
  const [pizzas, setPizzas] = useState<PizzaType[]>();
  const [sauces, setSauces] = useState<SauceType[]>();
  const [isLoading, setLoading] = useState<boolean>(true);

  const mainWindow = remote.BrowserWindow.getAllWindows[0];

  const getPizzas = useCallback(async () => {
    const data = await GET('/pizzas');
    setPizzas(data);
  }, []);

  const getSauces = useCallback(async () => {
    const data = await GET('/sauces');
    setSauces(data);
  }, []);

  const removeItem = useCallback(
    async (id: string, type: 'pizza' | 'sauce') => {
      setLoading(true);
      const data = await DEL(`/${type}`, { pizzaID: id, sauceID: id });
      if (data.status === 'ok') {
        type === 'pizza' ? await getPizzas() : await getSauces();
        await remote.dialog.showMessageBox(mainWindow, {
          type: 'info',
          message: `Your ${type} has been removed`,
        });
        setLoading(false);
      } else {
        await remote.dialog.showMessageBox(mainWindow, {
          type: 'error',
          message: 'connection error',
        });
        setLoading(false);
      }
    },
    [pizzas, sauces]
  );

  const openNewWindow = useCallback(
    async (options: { type: 'sauce' | 'pizza'; id: string }) => {
      const dialog = await remote.dialog.showMessageBox(mainWindow, {
        type: 'warning',
        message: 'Do you want to delete?',
        buttons: ['yes', 'no'],
      });
      if (dialog.response === 0) {
        options.type === 'pizza' && removeItem(options.id, 'pizza');
        options.type === 'sauce' && removeItem(options.id, 'sauce');
      }
    },
    []
  );

  useEffect(() => {
    !pizzas && getPizzas();
    !sauces && getSauces();
    if (pizzas && sauces) setLoading(false);
  }, [pizzas, sauces]);

  return View({
    state: { isLoading, sauces, pizzas },
    handlers: { openNewWindow },
  });
};

export default Remove;
