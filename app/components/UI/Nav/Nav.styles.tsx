import styled from 'styled-components';
import colors from '../../../constants/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const MenuIcon = styled.div`
  font-size: 25px;
  margin-bottom: 50px;
  width: 100%;
  margin: 20px 20px;
  cursor: default;
  @media screen and (prefers-color-scheme: light) {
    color: ${colors.black};
  }
  @media screen and (prefers-color-scheme: dark) {
    color: ${colors.white};
  }
  :hover {
    color: ${colors.yellow};
  }
`;
