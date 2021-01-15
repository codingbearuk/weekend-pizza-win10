import React, { useCallback, useState, useEffect } from 'react';

import View from './Remove.view';
import GET from '../../utils/api-comunication/get';
import DEL from '../../utils/api-comunication/delete';
import { PizzaType, SauceType } from './Remove.t';

const Remove: React.FunctionComponent = (p) => {
  const [pizzas, setPizzas] = useState<PizzaType[]>();
  const [sauces, setSauces] = useState<SauceType[]>();
  const [isLoading, setLoading] = useState<boolean>(true);

  const getPizzas = useCallback(async () => {
    const data = await GET('/pizzas');
    setPizzas(data);
  }, []);

  const getSauces = useCallback(async () => {
    const data = await GET('/sauces');
    setSauces(data);
  }, []);

  const removePizza = useCallback(async (id: string) => {
    const data = await DEL('/pizza', { pizzaID: id });
    console.log(data);
  }, []);

  useEffect(() => {
    !pizzas && getPizzas();
    !sauces && getSauces();
    if (pizzas && sauces) setLoading(false);
  }, [pizzas, sauces]);

  return View({
    state: { isLoading, sauces, pizzas },
  });
};

export default Remove;
