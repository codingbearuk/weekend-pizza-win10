import React from 'react';
import { ProgressCircle } from 'react-desktop/windows';

import { Container, Content } from './Remove.styles';
import { SauceType, PizzaType } from './Remove.t';
import { red } from '../../constants/colors';
import Element from './element';

interface RomoveTypes {
  state: { isLoading: boolean; sauces: SauceType[]; pizzas: PizzaType[] };
  handlers: {
    openNewWindow: (options: { type: 'sauce' | 'pizza'; id: string }) => void;
  };
}

const Remove: React.FunctionComponent<RomoveTypes> = (p) => {
  return (
    <Container>
      <h1>Remove pizzas and sauces</h1>
      {p.state.isLoading ? (
        <ProgressCircle color={red} size={80} />
      ) : (
        <Content>
          <h3>Pizzas</h3>
          <section>
            {p.state.pizzas.map((pizza) => (
              <Element
                key={pizza._id}
                name={pizza.name}
                id={pizza._id}
                ingrediends={pizza.ingredients}
                onClick={() =>
                  p.handlers.openNewWindow({ type: 'pizza', id: pizza._id })
                }
              />
            ))}
          </section>
          <h3>Sauces</h3>
          <section>
            {p.state.sauces.map((sauce) => (
              <Element
                key={sauce._id}
                name={sauce.name}
                id={sauce._id}
                description={sauce.description}
                onClick={() =>
                  p.handlers.openNewWindow({ type: 'sauce', id: sauce._id })
                }
              />
            ))}
          </section>
        </Content>
      )}
    </Container>
  );
};

export default Remove;
