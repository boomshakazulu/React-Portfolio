import React, { useState } from "react";
import "../components/Styling/Contact.css";

export default function ContactPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  const validateForm = () => {
    if (!email) {
      setError("Email is required");
      return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Invalid email address");
      return false;
    } else if (!name) {
      setError("Name is required");
      return false;
    } else if (!content) {
      setError("Content is required");
      return false;
    } else {
      setError("");
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // If there are no errors, proceed with form submission
      // Handle form submission (you can add your logic here)
      console.log("Form submitted:", { email, name, content });
    }
  };

  return (
    <div className="contact-form">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={validateForm}
            required
          />
        </div>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={validateForm}
            required
          />
        </div>
        <div>
          <label>Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onBlur={validateForm}
            required
          ></textarea>
        </div>
        {error && <p>{error}</p>}
        {error ? null : <button type="submit">Submit</button>}
      </form>
    </div>
  );
}
