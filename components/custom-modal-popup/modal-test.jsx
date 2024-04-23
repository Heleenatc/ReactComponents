import { useState } from "react";
import Modal from "./modal";

export default function ModalTest() {
  const [showModalPopup, setShowModalPopup] = useState(false);

  function handleToggleModalPopup() {
    setShowModalPopup(!showModalPopup);
  }

  function onClose() {
    setShowModalPopup(false);
  }

  return (
    <div>
      <button onClick={handleToggleModalPopup}>Show Modal Popup</button>
      {showModalPopup && (
        <Modal
          onClose={onClose}
          header = {'Hello'}
          body={<div>This message is from a parent page!</div>}
          footer={<h2>Custom Footer</h2>}
        />
      )}
    </div>
  );
}
