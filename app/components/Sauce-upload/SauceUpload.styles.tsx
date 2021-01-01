import styled, { css } from 'styled-components';
import colors from '../../constants/colors';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const DropArea = styled.div<{ isActive: boolean; isDroped: boolean }>`
  border-radius: 4px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  ${(p) =>
    p.isActive
      ? css`
          color: ${colors.red};
          border: 2px dotted ${colors.red};
        `
      : p.isDroped
      ? css`
          color: ${colors.success};
          border: 1px dotted ${colors.success};
        `
      : css`
          color: ${colors.yellow};
          border: 1px dotted ${colors.yellow};
        `};
  p {
    font-size: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    i {
      font-weight: 600;
      font-size: 1.2em;
      margin-right: 5px;
    }
  }
`;

export const FileDescription = styled.div`
  margin-top: 50px;
  width: 100%;
  p {
    margin: 0;
    font-size: 1em;
    color: ${colors.shadow};
  }
  img {
    height: 100px;
    margin-bottom: 20px;
  }
`;

export const Alert = styled.div`
  width: 100%;
  border: 1px solid ${colors.red};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin: 20px 0;
  padding: 20px;
  color: ${colors.red};
  i {
    margin-right: 10px;
  }
`;

export const ButtonInside = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  font-size: 1em;
  i {
    margin-right: 5px;
  }
`;

export const circleColor: string = colors.red;
