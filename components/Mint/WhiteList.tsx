/** @jsxImportSource theme-ui */

import React, { ReactNode } from "react";
import { Box, Flex, Input, Progress, Text, useThemeUI } from "theme-ui";
import CustomWalletMultiButton from "../CustomWalletMultiButton/WalletMultiButton";
import Title from "../Title/Title";
import Modal from "./Modal";

const WhiteList = (): JSX.Element => {
  const { theme } = useThemeUI();
  return (
    <Flex sx={{ alignItems: "center", justifyContent: "center" }}>
      <Modal>
        <Flex
          sx={{
            flexDirection: "column",
            gap: "2rem"
          }}>
          <Box>
            <Title
              title="Check Your"
              fontSize={[36, 36]}
              letterSpacing={[1, 1]}
            />
            <Title
              title="WhiteList Status"
              fontSize={[36, 36]}
              letterSpacing={[1, 1]}
              style={{ mt: "-1rem" }}
            />
          </Box>

          <Box>
            <Input
              type={"text"}
              placeholder="Insert wallet address"
              sx={{
                background: "svGradientLight",
                borderRadius: 0,
                border: `1px solid ${theme.colors?.["borderColor"]}`,
                "::placeholder": {
                  color: "text",
                  fontWeight: 300
                }
              }}
            />
            <Text>WhiteList verify</Text>
          </Box>

          <Box sx={{ width: "50%", m: "auto" }}>
            <CustomWalletMultiButton>Claimed</CustomWalletMultiButton>
          </Box>
        </Flex>
      </Modal>
    </Flex>
  );
};

export default WhiteList;
