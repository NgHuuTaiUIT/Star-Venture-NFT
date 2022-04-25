/** @jsxImportSource theme-ui */

import React, { ReactNode } from "react";
import { Box, Flex, Input, Progress, Text, useThemeUI } from "theme-ui";
import { useWindowSize } from "../../hooks/useWindowSize";
import CustomWalletMultiButton from "../CustomWalletMultiButton/WalletMultiButton";
import Title from "../Title/Title";
import Modal from "./Modal";

const WhiteList = (): JSX.Element => {
  const { theme } = useThemeUI();
  const size = useWindowSize();
  return (
    <Flex
      sx={{
        alignItems: "center",
        justifyContent: "center",
        maxWidth: [375, , "100%"],
        mx: ["auto", , "unset"]
      }}>
      <Modal>
        <Flex
          sx={{
            flexDirection: "column",
            gap: ["3rem", , "2rem"]
          }}>
          <Box>
            <Title
              title="Check Your"
              fontSize={[36, 36]}
              letterSpacing={[1, 1]}
            />
            <Title
              title={size.width < 768 ? "WhiteList" : "WhiteList Status"}
              fontSize={[36, 36]}
              letterSpacing={[1, 1]}
              style={{ mt: ["0rem", , "-1rem"] }}
            />
            {size.width < 768 && (
              <Title
                title="Status"
                fontSize={[36, 36]}
                letterSpacing={[1, 1]}
                style={{ mt: ["0rem", , "-1rem"] }}
              />
            )}
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
                },
                mb: [30, , 10]
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
