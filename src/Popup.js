// Popup.js
import React from 'react';

function Popup({ visible }) {
  return (
    <div id="popup" className={visible ? 'popup-visible' : 'popup-hidden'}>
      <div className="popup-content">
        <div className="cartoon-face">
          <div className="face"></div>
          <div className="hair"></div>
          <div className="eyes">
            <div className="eye"></div>
            <div className="eye"></div>
          </div>
          <div className="mouth"></div>
          <div className="thumbs-up"></div>
        </div>
        <p>Great job! 👍</p>
      </div>
    </div>
  );
}

export default Popup;
