import styled from 'styled-components';
import colors from '../../constants/colors';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OrderContainer = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  width: 100%;
  height: 550px;
`;
