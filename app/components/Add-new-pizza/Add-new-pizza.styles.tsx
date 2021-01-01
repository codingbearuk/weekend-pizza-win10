import styled, { css } from 'styled-components';
import colors from '../../constants/colors';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Content = styled.div``;

export const Image = styled.img<{ isSelected: boolean }>`
  height: 80px;
  ${({ isSelected }) =>
    !isSelected &&
    css`
      filter: grayscale(100%);
    `}
  cursor: pointer;
`;
