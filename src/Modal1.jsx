import { useEffect } from "react";
function Modal1({ isOpen, onOpenEffect, onCloseEffect, children }) {
  useEffect(() => {
    if (isOpen && onOpenEffect) {
      onOpenEffect();
    }
    if (!isOpen && onCloseEffect) {
      onCloseEffect();
    }
  }, [isOpen, onOpenEffect, onCloseEffect]);
  if (!isOpen) {
    return null;
  }

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0,0,0,0.7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "10px",
          maxWidth: "400px",
        }}
      >
        {children}
      </div>
    </div>
  );
}
export default Modal1;
