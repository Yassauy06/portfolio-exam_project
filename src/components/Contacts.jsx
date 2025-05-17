import React from 'react';

function Contacts() {
  return (
    <div className="address-container">
      <h1 className="title-page">Contacts</h1>
      <ul className="contact-list">
        <li>
          <span role="img" aria-label="phone">📞</span>
          +7 (705) 576 66 00
        </li>
        <li>
          <span role="img" aria-label="telegram">💬</span>
          <a href="https://t.me/yourTelegramUsername" target="_blank" rel="noopener noreferrer">
            Telegram
          </a>
        </li>
        <li>
          <span role="img" aria-label="whatsapp">🟢</span>
          <a href="https://wa.me/77055766600" target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        </li>
        <li>
          <span role="img" aria-label="email">📧</span>
          <a href="mailto:yourmail@example.com">
            yourmail@example.com
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contacts;
