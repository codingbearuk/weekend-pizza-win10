import styled, { StyledComponent } from 'styled-components';

import colors from '../../../constants/colors';

export const Container: StyledComponent<'div', any, {}> = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.grey};
  border-radius: 5px;
  margin-right: 10px;
  margin-bottom: 10px;
  cursor: default;

  @media screen and (prefers-color-scheme: dark) {
    background-color: ${colors.darkGrey};
  }
`;
