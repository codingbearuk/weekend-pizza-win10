import styled from 'styled-components';
import colors from '../../../constants/colors';

export const Container = styled.div`
  background-color: ${colors.shadow};
  display: flex;
  position: absolute;
  border-radius: 10px;
  padding: 20px;
  img {
    height: 100px;
    margin-right: 10px;
    :last-child {
      margin-right: 0;
    }
  }
`;
