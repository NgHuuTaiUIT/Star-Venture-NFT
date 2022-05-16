/** @jsxImportSource theme-ui */

import React, { useEffect } from "react";
import { Box, Flex, Input, useThemeUI } from "theme-ui";
import { titleStyle } from "./styles";

const HighScore = () => {
  return (
    <Flex
      sx={{
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        maxWidth: "900px",
        m: "0 auto"
      }}>
      <Reactangle />
      <Score />
    </Flex>
  );
};

const Reactangle = () => (
  <Box
    sx={{
      position: "relative",
      background:
        "radial-gradient(100% 100% at 50% 0%, rgba(123, 223, 255, 0) 45.83%, #9AB0FF 100%)",
      p: "1px",
      width: ["100%", , , "900px"],
      mt: [50, , , 0]
    }}>
    <Box
      sx={{
        backgroundColor: "background",
        height: ["300px", "400px", "506.25px"]
      }}
    />
  </Box>
);

const dataScore = [
  {
    idx: 1,
    name: "Nguyen Van A",
    wallet: "0x4dda6deb97ba4fbe724a783daecdb16347f85076cbd28c59ee4c3485f8545e11"
  },
  {
    idx: 2,
    name: "Nguyen Van B",
    wallet: "0xb71fe760e07f73034458920fca10167f115d6b175fcdf77de5f033cab34ece5e"
  },
  {
    idx: 3,
    name: "Nguyen Van C",
    wallet: "0xa88cbb0833d657db7bca128c3ff3063809efeba71bd7e7e9018dd87c41872a23"
  }
];

const Score = () => {
  const { theme } = useThemeUI();

  const [searchWallet, setSearchWallet] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWallet(event.target.value);
  };

  return (
    <Flex
      sx={{ flexDirection: "column", width: "calc(100% - 30px)", mx: "1rem" }}>
      <Box as="h2" sx={titleStyle}>
        High Score
      </Box>
      <Flex sx={{ width: "100%", gap: "10px", my: "1.8rem" }}>
        <Flex
          sx={{
            width: "228px",
            height: "40px",
            backgroundColor: "secondary",
            border: `1px solid ${theme.colors?.["borderColor"]}`,
            alignItems: "center",
            justifyContent: "space-between",
            px: "1rem"
          }}>
          <span>Date</span>
          <span
            sx={{ transform: "rotate(90deg)", fontSize: 20, fontWeight: 300 }}>
            ▷
          </span>
        </Flex>

        <Input
          placeholder={"Insert wallet adress"}
          value={searchWallet}
          onChange={handleChange}
          sx={{
            p: 0,
            borderRadius: 0,
            fontSize: "",
            flexGrow: 1,
            backgroundColor: "background",
            border: `1px solid ${theme.colors?.["borderColor"]}`,
            alignItems: "center",
            px: "1rem"
          }}
        />
      </Flex>
      <Flex sx={{ flexDirection: "column", gap: "3px" }}>
        {dataScore.map(data => (
          <Row key={data.idx} {...data} vlSearch={searchWallet} />
        ))}
      </Flex>
    </Flex>
  );
};

const Row = ({
  idx,
  name,
  wallet,
  vlSearch
}: {
  idx: number;
  name: string;
  wallet: string;
  vlSearch: string;
}) => {
  const { theme } = useThemeUI();

  const handleHighLight = () => {
    const indexStr = vlSearch ? wallet.indexOf(vlSearch) : -1;
    const result =
      indexStr >= 0 ? (
        <>
          {wallet.slice(0, indexStr)}
          <mark>{vlSearch}</mark>
          {wallet.slice(indexStr + vlSearch.length)}
        </>
      ) : (
        wallet
      );

    return result;
  };

  let numberWallet = handleHighLight();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    numberWallet = handleHighLight();
  }, [vlSearch]);

  return (
    <Flex
      sx={{
        backgroundColor: `#12192C66`,
        height: "47px",
        alignItems: "center",
        px: "1rem",
        userSelect: "text"
      }}>
      <p sx={{ flex: "0 0 15%" }}>{idx}</p>
      <p sx={{ flex: "0 0 25%" }}>{name}</p>
      <p sx={{ flex: " 1 0", maxWidth: "60%", overflow: "hidden" }}>
        {numberWallet}
      </p>
    </Flex>
  );
};

export default HighScore;
