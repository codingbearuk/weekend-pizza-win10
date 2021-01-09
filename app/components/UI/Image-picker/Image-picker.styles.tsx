import styled from 'styled-components';
import colors from '../../../constants/colors';

export const Container = styled.div`
  background-color: ${colors.fullTransparentWhite};
  border: 1px solid ${colors.fullTransparentBlack};
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  position: absolute;
  border-radius: 10px;
  padding: 30px;
  backdrop-filter: blur(5px);
  @media screen and (prefers-color-scheme: dark) {
    background-color: ${colors.fullTransparentBlack};
    border: 1px solid ${colors.fullTransparentWhite};
  }
  img {
    height: 100px;
    margin-right: 30px;
    margin-bottom: 30px;
    :last-child {
      margin-right: 0;
      margin-bottom: 0;
    }
  }
`;
