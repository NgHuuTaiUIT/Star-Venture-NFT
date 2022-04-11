import React, { ReactNode, useContext } from "react";
import { Box, Button, Card, Heading, Image, Text } from "theme-ui";
import { ModalContext } from "../../context/ModalProvider";
import {
  backgroundStyle,
  closeButtonStyle,
  containerStyle,
  modalContentStyle,
  textStyle,
  wrapInfoModalContentStyle
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
    <Image src={image} alt="portrait" />
    <Box sx={wrapInfoModalContentStyle}>
      <Heading as="h2">{name}</Heading>
      <Heading as="h4">{position}</Heading>
      <Text as="span">{content}</Text>
    </Box>
  </Card>
);

export default Modal;
