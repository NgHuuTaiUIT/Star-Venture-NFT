/** @jsxImportSource theme-ui */

import Image from "next/image";
import React, { ReactNode } from "react";
import { Box, Flex, Progress, Text } from "theme-ui";
import { useWindowSize } from "../../hooks/useWindowSize";
import CustomWalletMultiButton from "../CustomWalletMultiButton/WalletMultiButton";
import Title from "../Title/Title";
import Modal from "./Modal";
import {
  privateDaysContainerStyle,
  numberWrapperStyle,
  progressWrapperStyle
} from "./styles";
type Props = {
  children?: ReactNode;
};

const PrivateDayTime: React.FC<Props> = () => {
  return (
    <Box sx={privateDaysContainerStyle}>
      <Title
        title="private"
        letterSpacing={[1]}
        fontSize={[40, 30]}
        style={{
          width: "100%",
          ml: 0,
          mt: [30, , -10, 30],
          textTransform: "none"
        }}
      />
      <Title
        title="sale"
        letterSpacing={[1]}
        fontSize={[40, 30]}
        style={{
          textTransform: "none",
          width: "100%",
          ml: 0,
          mt: [-20, , -30, -20]
        }}
      />
      <Box sx={numberWrapperStyle}>
        <Box
          as="h1"
          variant="text.roadmap"
          sx={{ fontSize: "4rem", lineHeight: "4rem", fontWeight: "400" }}>
          03
        </Box>
        <Box
          as="h2"
          variant="text.roadmap"
          sx={{ fontSize: "2rem", mb: "0.7rem" }}>
          DAYS
        </Box>
      </Box>
      <Text sx={{ lineHeight: "3rem" }}>12:34:56</Text>
    </Box>
  );
};

const ProgressBar = ({
  value,
  max
}: {
  value: string | number | readonly string[] | undefined;
  max: string | number | undefined;
}) => {
  return (
    <Box
      sx={{
        ...progressWrapperStyle
      }}>
      <Progress
        value={value}
        max={max}
        sx={{
          borderRadius: 0
        }}
      />
    </Box>
  );
};

const PrivateDay: React.FC<Props> = () => {
  const size = useWindowSize();
  return (
    <Flex
      sx={{
        alignItems: "center",
        justifyContent: "center",
        flexDirection: ["column", , "row"],
        maxWidth: [375, , "100%"],
        mx: ["auto", , "unset"]
      }}>
      <PrivateDayTime />
      <Modal>
        <Flex
          sx={{
            flexDirection: "column",
            justifyContent: "space-around",
            gap: ["1rem", , "0.5rem", "1.5rem"]
          }}>
          <Title
            title={size.width >= 768 ? "Make your own" : "Make your"}
            fontSize={[36, 36]}
            letterSpacing={[1, 1]}
          />
          {size.width < 768 && (
            <Title
              title="own"
              fontSize={[36, 36]}
              letterSpacing={[1, 1]}
              style={{ mt: "-2rem" }}
            />
          )}
          <Box>
            <Text
              sx={{
                fontFamily: "Ubuntu",
                fontSize: "18px",
                fontWeight: "300",
                lineHeight: "27px",
                letterSpacing: "0px"
              }}>
              Price: 0.008 ETH • Mint/wallet: 2
            </Text>
            <br />
            <Image
              src="/assets/images/green-star.svg"
              height={20}
              width={49}
              alt=""
            />
          </Box>
          <Box>
            <Flex sx={{ justifyContent: "space-between", mb: "1rem" }}>
              <span sx={{ textAlign: "left" }}>Total NFTs</span>
              <span sx={{ textAlign: "right" }}>Minted 256/8.888</span>
            </Flex>
            <ProgressBar max={1} value={1 / 3} />
          </Box>

          <Box sx={{ maxWidth: "50%", m: "auto" }}>
            <CustomWalletMultiButton />
            <span>Something went wrong</span>
          </Box>
        </Flex>
      </Modal>
    </Flex>
  );
};

export default PrivateDay;
