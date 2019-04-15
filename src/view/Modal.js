import React from "react";

import "./modal.css";

const Modal = ({ title, onCancel, children }) => {
  return (
    <div className="modal-wrapper">
      <div className="modal-container">
        <header className="modal-header">
          <h1>{title}</h1>
          <button className="modal-close-btn" onClick={onCancel}>
            <span role="img" aria-label="close">
              &#x274C;
            </span>
          </button>
        </header>
        <section className="modal-main-content">{children}</section>
      </div>
      <div className="modal-backdrop" />
    </div>
  );
};

Modal.defaultProps = {
  title: "Edit Campaign Name",
  onCancel: () => {}
};

export default Modal;
