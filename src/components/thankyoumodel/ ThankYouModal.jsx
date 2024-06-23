// ThankYouModal.js
import React from "react";
import "./ThankYouModal.css";

const ThankYouModal = ({ show, handleClose }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <h2>Thank You!</h2>
        <p>
          As the developer, I appreciate your support and shares. More features are coming soon. Stay tuned!
        </p>
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
};

export default ThankYouModal;
