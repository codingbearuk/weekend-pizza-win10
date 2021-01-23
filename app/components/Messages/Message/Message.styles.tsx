import styled, { css } from 'styled-components';

import colors from '../../../constants/colors';

export const Container = styled.div<{ isOpen: boolean; new: boolean }>`
  display: grid;
  grid-template-columns: 20% 80%;
  width: 100%;
  margin-bottom: 10px;
  cursor: default;
  border-left: 3px solid ${(p) => (p.new ? colors.success : colors.white)};
  ${(p) =>
    p.isOpen &&
    css`
      border-left: 3px solid ${colors.yellow};
      color: ${colors.yellow};
    `}
`;

export const Image = styled.div<{ new: boolean; isOpen: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: 5px;
  i {
    color: ${(p) => (p.new ? colors.success : colors.white)};
    ${(p) =>
      p.isOpen &&
      css`
        color: ${colors.yellow};
      `}
  }
`;

export const Title = styled.div<{ new: boolean; isOpen: boolean }>`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: ${(p) => (p.new ? colors.success : colors.white)};
  ${(p) =>
    p.isOpen &&
    css`
      color: ${colors.yellow};
    `}
  h3 {
    font-size: 1.2em;
    margin: 0;
  }
  p {
    font-size: 0.7em;
    margin: 0;
  }
`;
