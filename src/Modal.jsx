import { useState } from "react";
import Modal1 from "./Modal1";
function Modal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const whenModalOpens = () => {
    console.log("Modal Khullo! scroll bondho kori");
    document.body.style.overflow = "hidden";
  };
  const whenModalCloses = () => {
    console.log("Modal Bondho Holo, scroll chalu kori");
    document.body.style.overflow = "auto";
  };
  return (
    <div style={{ padding: "50px" }}>
      <h1>My Website</h1>
      <p>Onek Lomba Content...niche scroll koro </p>
      <div style={{ height: "200vh" }}>onek lomba page</div>
      <button onClick={() => setIsModalOpen(true)}>Modal Kholo</button>
      <Modal1
        isOpen={isModalOpen}
        onOpenEffect={whenModalOpens}
        onCloseEffect={whenModalCloses}
      >
        <h2>Welcome</h2>
        <p>Eta akta Modal, akhon scroll kora jabena</p>
        <button onClick={() => setIsModalOpen(false)}>bondho koro </button>
      </Modal1>
    </div>
  );
}
export default Modal;
