import React, { ReactNode } from "react";
import { Box } from "theme-ui";
import { modalContainerStyle } from "./styles";
type Props = {
  children: ReactNode;
};

const Modal: React.FC<Props> = ({ children }: Props) => {
  return <Box sx={modalContainerStyle}>{children}</Box>;
};

export default Modal;
