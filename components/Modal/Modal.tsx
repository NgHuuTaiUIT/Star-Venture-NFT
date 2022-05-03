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
  modalContentStyle,
  textModalContentStyle,
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
  <Card sx={modalContentStyle}>
    <Image src={image} />
    <Box sx={textModalContentStyle}>
      <Heading as="h2">{name}</Heading>
      <Heading as="h4">{position}</Heading>
      <Text as="span" sx={textStyle}>
        {content}
      </Text>
    </Box>
  </Card>
);

export default Modal;
