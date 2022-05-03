/** @jsxImportSource theme-ui */

import React, { ReactNode, useContext } from "react";
import {
  Box,
  Button,
  Card,
  Heading,
  Image,
  Text,
  ThemeUIStyleObject
} from "theme-ui";
import { ModalContext } from "../../context/ModalProvider";
import {
  backgroundStyle,
  closeButtonStyle,
  containerStyle,
  modalContentStyle,
  wrapInfoModalContentStyle
} from "./styles";
import { useSpring, animated as a, config, useTrail } from "react-spring";

type ModalProps = {
  showModal: boolean;
  setShowModal: Function;
  children?: ReactNode;
  modalContent?: ModalContentProps;
};

const Trail: React.FC<{ open: boolean; sx?: ThemeUIStyleObject }> = ({
  open,
  children,
  sx
}) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    y: open ? 0 : -100,
    // height: open ? 110 : 0,
    from: { opacity: 0, y: -100, height: "100%" }
  });
  return (
    <>
      {trail.map(({ ...style }, index) => (
        <a.div key={index} style={style}>
          <a.div style={{ height: style.height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </>
  );
};

const Modal = () => {
  const { showModal, modalContent, openModal, closeModal } =
    useContext(ModalContext);
  const styles = useSpring({
    opacity: showModal ? 1 : 0,
    visibility: showModal ? "visible" : "hidden",
    ...(backgroundStyle as any)
  });
  return (
    <>
      <a.section style={styles} onClick={openModal}>
        <Trail open={showModal}>
          <Box sx={containerStyle}>
            <>
              {modalContent && <ModalContent {...modalContent} />}
              <Button onClick={() => closeModal} sx={closeButtonStyle}></Button>
            </>
          </Box>
        </Trail>
      </a.section>
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
