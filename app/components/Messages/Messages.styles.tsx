import styled, { StyledComponent } from 'styled-components';
import colors from '../../constants/colors';

export const Container: StyledComponent<'div', any, {}> = styled.div``;

export const Content: StyledComponent<'div', any, {}> = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-template-rows: 100%;
  height: 100%;
`;

export const MessagesSidebar = styled.div`
  height: 80vh;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const OpenMessage = styled.div`
  height: 80vh;
  overflow-y: auto;
  margin-right: 20px;
  ::-webkit-scrollbar {
    width: 10px;
  }
  p {
    font-size: 1.1em;
    text-align: justify;
  }
`;
