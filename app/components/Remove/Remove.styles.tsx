import styled, { StyledComponent } from 'styled-components';

import colors from '../../constants/colors';

export const Container: StyledComponent<'div', any, {}> = styled.div``;
export const Content: StyledComponent<'div', any, {}> = styled.div`
  section {
    width: 100%;
    display: grid;
    grid-template-columns: 33.333% 33.333% 33.333%;
  }
`;
