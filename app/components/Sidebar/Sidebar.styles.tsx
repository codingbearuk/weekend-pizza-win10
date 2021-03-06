import styled from 'styled-components';
import colors from '../../constants/colors';

export const Container = styled.div<{ isMaximized: boolean }>`
  height: 100vh;
  width: 100%;
  @media screen and (prefers-color-scheme: light) {
    background: ${(p) => colors.semiTransparentGrey};
  }
  @media screen and (prefers-color-scheme: dark) {
    background: ${(p) => colors.transparentBlack};
  }
`;
