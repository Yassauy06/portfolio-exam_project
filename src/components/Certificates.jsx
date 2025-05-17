import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Certificates() {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
   axios.get('https://6828575e6b7628c52912fc2b.mockapi.io/projects')

      .then(res => setCertificates(res.data));
  }, []);

  return (
    <div className="certificates">
      <h2>Мои сертификаты</h2>
      <ul>
        {certificates.map(cert => (
          <li key={cert.id}>
            <strong>{cert.title}</strong><br />
            <a href={cert.fileUrl} target="_blank" rel="noopener noreferrer">
              📄 Открыть сертификат
            </a><br />
            <span>{new Date(cert.issuedAt).toLocaleDateString()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Certificates;
