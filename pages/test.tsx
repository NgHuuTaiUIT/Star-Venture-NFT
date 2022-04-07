import { useState } from "react";
import { Button } from "theme-ui";
import Modal from "../components/Modal/Modal";

export default function Page() {
  // const [Modal, open, close, isOpen] = useModal("root", {
  //   preventScroll: true,
  //   closeOnOverlayClick: false
  // });
  const [showModal, setShowModal] = useState(true);
  const openModal = () => {
    setShowModal((pre: boolean) => !pre);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div>
      <Button onClick={openModal}>dsadas</Button>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}
