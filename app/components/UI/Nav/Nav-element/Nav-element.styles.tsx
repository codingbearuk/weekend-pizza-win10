import styled, { css } from 'styled-components';
import colors from '../../../../constants/colors';

export const Container = styled.div<{ isActive: boolean }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media screen and (prefers-color-scheme: light) {
    color: ${colors.black};
  }
  @media screen and (prefers-color-scheme: dark) {
    color: ${colors.white};
  }
  font-size: 20px;
  cursor: default;
  width: 100%;
  padding: 20px;
  overflow: hidden;
  max-height: 60px;
  ${({ isActive }) =>
    isActive &&
    css`
      @media screen and (prefers-color-scheme: light) {
        background-color: ${colors.white};
      }
      @media screen and (prefers-color-scheme: dark) {
        background-color: ${colors.black};
      }
    `}
  i {
    margin-right: 25px;
  }

  :hover {
    background-color: ${colors.yellow};
  }
`;
