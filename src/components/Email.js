import React, { useState } from 'react';

const EmailComponent = () => {
    const [message, setMessage] = useState(null);
  
    const copyToClipboard = (text) => {
      navigator.clipboard.writeText(text)

    };
  
    const handleEmailClick = (event) => {
      event.preventDefault();
      const email = 'jmcfee@umich.edu'; // Replace with the actual email address
      copyToClipboard(email);
    };
  
    return (
      <a href="mailto:jmcfee@umich.edu" onClick={handleEmailClick} className="bubble-link">
        <div id="email" className="contact-bubble">
          <div className='content-logo'>
            <img src={require("../images/emaillogo.png")} alt="Email Logo" className="logo" />
          </div>
          <div className='content-name'>Email</div>
        </div>
        <span className="mailto-message">{message}</span>
      </a>
    );
  };
  
export default EmailComponent;