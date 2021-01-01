import React, { FunctionComponent } from "react";
import { Container } from "./separator.styles";

const Separator: FunctionComponent<{ width?: number; height?: number }> = (
  p
) => {
  return <Container width={p.width} height={p.height} />;
};

export default Separator;
