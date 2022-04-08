import styled from "@emotion/styled";
import { type } from "os";
import React, { ReactNode, useContext, useRef } from "react";
import {
  Box,
  Button,
  Card,
  Heading,
  Image,
  Text,
  ThemeUICSSProperties
} from "theme-ui";
import { ModalContext } from "../../context/ModalContext";
import {
  backgroundStyle,
  closeButtonStyle,
  containerStyle,
  textStyle
} from "./styles";

type ModalProps = {
  showModal: boolean;
  setShowModal: Function;
  children?: ReactNode;
  modalContent?: ModalContentProps;
};

const Modal = () => {
  const { showModal, modalContent, openModal, closeModal } =
    useContext(ModalContext);
  return (
    <>
      {showModal ? (
        <Box as="section" sx={backgroundStyle} onClick={openModal}>
          <Box sx={containerStyle}>
            {modalContent && <ModalContent {...modalContent} />}
            <Button onClick={() => closeModal} sx={closeButtonStyle}></Button>
          </Box>
        </Box>
      ) : null}
    </>
  );
};

export type ModalContentProps = {
  image: string;
  name: string;
  position: string;
  content: string;
};

export const ModalContent: React.FC<ModalContentProps> = ({
  image,
  name,
  position,
  content
}) => (
  <Card
    sx={{
      borderRadius: "3",
      display: "flex",
      justifyContent: ["start", , , "space-between"],
      alignItems: ["center", , , "start"],
      flexDirection: ["column", , , "row"],
      maxWidth: ["90%", , , "90%"],
      mx: "auto",
      my: [200, 150, , 0],
      gap: [70, 40]
    }}>
    <Image
      src={image}
      sx={{
        flex: "0 0 33.33%",
        height: ["100%", , , "auto"],
        minWidth: [360, , , 0],
        objectFit: "cover",
        borderTopLeftRadius: "3",
        borderBottomLeftRadius: "3",
        maxWidth: ["90%", , , "100%"],
        my: [100, , 0, 0]
      }}
    />
    <Box sx={{ fontSize: [42, 32, , 18] }}>
      <Heading
        as="h2"
        mb={2}
        sx={{
          lineHeight: [2, , , 1],

          textAlign: ["center", , , "start"],
          fontSize: ["1.2em"]
        }}>
        {name}
      </Heading>
      <Heading
        as="h4"
        // mb={3}
        sx={{
          textAlign: ["center", , , "start"],
          fontWeight: "lighter",
          fontSize: "0.8em",
          lineHeight: [2, , , 3],
          mb: [80, , 0, 0]
        }}>
        {position}
      </Heading>
      {/* <Text mb={3} sx={{ lineHeight: 1.5, letterSpacing: 1.2 }}>
        {content}
      </Text> */}
      <Box as="p" sx={textStyle}>
        {content}
      </Box>
    </Box>
  </Card>
);

export default Modal;
