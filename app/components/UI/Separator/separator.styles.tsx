import styled from "styled-components";

export const Container = styled.div<{ width?: number; height?: number }>`
  width: ${(p) => p.width + "px"};
  height: ${(p) => p.height + "px"};
`;
