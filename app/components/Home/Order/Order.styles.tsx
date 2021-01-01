import styled from 'styled-components';
import colors from '../../../constants/colors';

interface ContainerType {
  isOpen: boolean;
  isNew: boolean;
  isDelivered: boolean;
}

export const Container = styled.div<ContainerType>`
  padding: 5px;
  margin-bottom: 10px;
  cursor: default;
  position: relative;
  h2 {
    transition-duration: 0.3s;
    color: ${({ isOpen, isNew, isDelivered }) =>
      isNew
        ? colors.success
        : isOpen
        ? colors.red
        : isDelivered
        ? colors.shadow
        : colors.yellow};
    font-size: 1em;
    display: flex;
  }
`;

export const NewLabel = styled.div`
  font-size: 0.5em;
  font-weight: 600;
  color: ${colors.success};
  position: absolute;
  top: -5px;
`;

export const OrderDetails = styled.div`
  section {
    display: flex;
    align-items: center;
    margin: 5px 0;
    i {
      font-size: 1em;
      margin-right: 10px;
      color: ${colors.red};
    }
    p {
      font-size: 0.8em;
      margin: 0;
      color: ${colors.shadow};
    }
  }
`;

export const CartList = styled.div`
  margin: 20px 5px;
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    align-items: center;
    i {
      margin-right: 5px;
      color: ${colors.red};
    }
    h3 {
      margin: 0;
    }
  }
  p {
    display: flex;
    align-items: center;
    margin: 0;
    font-size: 0.9em;
    margin-left: 10px;
    strong {
      margin-left: 5px;
    }
    i {
      color: ${colors.success};
      margin-right: 10px;
    }
  }
`;

export const ActionButtonsContainer = styled.div`
  display: flex;
`;
