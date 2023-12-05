import React, { useState } from "react";

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || message === "") {
      setErrorMessage("All fields are required.");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage("Invalid email.");
    } else {
      setErrorMessage("");
    }
  };

  return (
    <>
      <h1>Send me a message</h1>
      <div class="container">
        <form onSubmit={handleSubmit}>
          <div class="mb-3">
            <label for="name" class="form-label">
              Name
            </label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Enter name..."
              maxLength={50}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Enter email..."
              maxLength={100}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">
              Message
            </label>
            <textarea
              type="text"
              class="form-control"
              id="message"
              placeholder="Enter your message here..."
              maxLength={500}
              rows="8"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          {errorMessage && <p className="error">{errorMessage}</p>}
          <div class="d-grid gap-2">
            <button class="btn btn-primary" type="submit">Send</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ContactPage;
