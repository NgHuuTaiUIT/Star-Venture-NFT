import React, { ReactNode, useContext } from "react";
import { Box, Button, Card, Heading, Image, Text } from "theme-ui";
import { ModalContext } from "../../context/ModalProvider";
import {
  backgroundStyle,
  closeButtonStyle,
  containerStyle,
  modalContentStyle,
  wrapInfoModalContentStyle
} from "./styles";
import { useSpring, animated as a, config } from "react-spring";

type ModalProps = {
  showModal: boolean;
  setShowModal: Function;
  children?: ReactNode;
  modalContent?: ModalContentProps;
};

const Modal = () => {
  const { showModal, modalContent, openModal, closeModal } =
    useContext(ModalContext);
  const modalSpringProps = useSpring({
    from: { opacity: 0, marginTop: -100 },
    to: { opacity: 1, marginTop: 0 },
    delay: 500,
    config: config.molasses
  });

  return (
    <>
      {showModal && (
        <a.div style={modalSpringProps}>
          <Box as="section" sx={backgroundStyle} onClick={openModal}>
            <Box sx={containerStyle}>
              {modalContent && <ModalContent {...modalContent} />}
              <Button onClick={() => closeModal} sx={closeButtonStyle}></Button>
            </Box>
          </Box>
        </a.div>
      )}
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
