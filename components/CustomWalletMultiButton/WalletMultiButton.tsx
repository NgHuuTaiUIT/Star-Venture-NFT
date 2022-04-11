/** @jsxImportSource theme-ui */

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Box } from "theme-ui";
import { btnConnectStyle, wrapButton } from "./style";

const CustomWalletMultiButton = () => {
  return (
    <Box sx={wrapButton}>
      <WalletMultiButton sx={btnConnectStyle}></WalletMultiButton>
    </Box>
  );
};

export default CustomWalletMultiButton;
