import styled, { css, StyledComponent } from 'styled-components';
import colors from '../../constants/colors';

export const Container: StyledComponent<'div', any, {}> = styled.div``;

export const Content = styled.div<{ isSidebarOpen: boolean }>`
  display: grid;
  grid-template-rows: 100%;
  height: 100%;
  ${(p) =>
    p.isSidebarOpen
      ? css`
          grid-template-columns: 60% 40%;
        `
      : css`
          grid-template-columns: 70% 30%;
        `}
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
  position: relative;
  ::-webkit-scrollbar {
    width: 10px;
  }
  p {
    font-size: 1.1em;
    text-align: justify;
  }
  h2 {
    font-size: 1.2em;
    color: ${colors.yellow};
  }
  h3 {
    font-size: 0.8em;
    margin: 0;
    color: ${colors.shadow};
    font-weight: 100;
  }
`;

export const ActionContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  cursor: default;
  font-size: 1.2em;
  i {
    margin-right: 15px;
    :last-child {
      margin-right: 0px;
    }
  }
`;
