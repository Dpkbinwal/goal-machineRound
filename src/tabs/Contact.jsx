import React from 'react';

function Contact() {
  return (
    <div className="contact-page">
      <header className="header">
        <h1>Contact Us</h1>
      </header>
      <main className="main-content">
        <p>If you have any questions, feel free to reach out to us!</p>
        <form className="contact-form">
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <label>
            Message:
            <textarea name="message"></textarea>
          </label>
          <button type="submit">Send</button>
        </form>
      </main>
      <footer className="footer">
        <p>&copy; 2024 Our Company</p>
      </footer>
    </div>
  );
}

export default Contact;
