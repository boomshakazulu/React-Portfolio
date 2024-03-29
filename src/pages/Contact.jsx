import React, { useState, useRef, useEffect } from "react";
import "../components/Styling/Contact.css";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  //env variable wouldn't work for some reason. console logging them showed correctly but could never make an api call
  const key = "Evj6952VcoR3IJ0ml";
  const template = "template_r1wscde";
  const serviceId = "service_r13s02r";
  const form = useRef();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [submissionStatus, setSubmissionStatus] = useState(null);
  //calidate email, name and content fields
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
  // handles the submit, emails me the results and zeroes the form
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      emailjs
        .sendForm(serviceId, template, e.target, key)
        .then(() => {
          console.log("Form submitted:", { email, name, content });
          setEmail("");
          setContent("");
          setName("");
          setSubmissionStatus("success");
        })
        .catch((error) => {
          console.error("Error submitting form:", error);
          setSubmissionStatus("error");
        });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "user_email") {
      setEmail(value);
    } else if (name === "user_name") {
      setName(value);
    } else if (name === "message") {
      setContent(value);
    }

    // Call validateForm on every input change
    validateForm();
  };

  useEffect(() => {
    // Add input event listener to all input fields
    const emailInput = form.current.querySelector('[name="user_email"]');
    const nameInput = form.current.querySelector('[name="user_name"]');
    const contentInput = form.current.querySelector('[name="message"]');

    emailInput.addEventListener("input", handleInputChange);
    nameInput.addEventListener("input", handleInputChange);
    contentInput.addEventListener("input", handleInputChange);

    // Remove input event listeners on unmount
    return () => {
      emailInput.removeEventListener("input", handleInputChange);
      nameInput.removeEventListener("input", handleInputChange);
      contentInput.removeEventListener("input", handleInputChange);
    };
  }, [handleInputChange, validateForm]);

  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2>Contact Me</h2>
        {submissionStatus === "success" && (
          <p style={{ color: "green" }}>
            Request received! I'll get back to you shortly
          </p>
        )}
        <form ref={form} onSubmit={handleSubmit}>
          <label>Email:</label>
          <input
            type="email"
            name="user_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={validateForm}
            required
          />
          <label>Name:</label>
          <input
            type="text"
            name="user_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={validateForm}
            required
          />
          <label>Content:</label>
          <textarea
            value={content}
            name="message"
            onChange={(e) => setContent(e.target.value)}
            onBlur={validateForm}
            required
          ></textarea>
          {error && <p>{error}</p>}
          {error ? null : (
            <button type="submit" value="Send">
              Submit
            </button>
          )}
        </form>
      </div>
    </div>
  );
}
