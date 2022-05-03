import { createContext, ReactNode, useState } from "react";

export const ModalContext = createContext<any>({});

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({
    image: "",
    name: "",
    position: "",
    content: ""
  });

  const openModal = () => {
    setShowModal((pre: boolean) => !pre);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <ModalContext.Provider
      value={{
        showModal,
        openModal,
        closeModal,
        modalContent,
        setModalContent
      }}>
      {children}
    </ModalContext.Provider>
  );
};
