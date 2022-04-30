/** @jsxImportSource theme-ui */

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { ReactNode } from "react";
import { Box } from "theme-ui";
import { btnConnectStyle, wrapButton } from "./style";

const CustomWalletMultiButton = ({ children }: { children?: ReactNode }) => {
  return (
    <Box sx={wrapButton}>
      <WalletMultiButton sx={btnConnectStyle}>{children}</WalletMultiButton>
    </Box>
  );
};

export default CustomWalletMultiButton;
