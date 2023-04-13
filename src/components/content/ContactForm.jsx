import React, { useState } from "react";
import emailjs from "emailjs-com";

const EmailForm = () => {
  const [emailData, setEmailData] = useState({
    subject: "",
    fromEmail: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEmailData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Replace with your EmailJS Service ID, Template ID, and User ID
    const serviceID = "service_vst9t2n";
    const templateID = "template_86w17wo";
    const userID = "og5NbyC6J0ImG5mFQ";

    emailjs
      .send(serviceID, templateID, emailData, userID)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setEmailData({ subject: "", fromEmail: "", message: "" });
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Subject:
          <input
            type="text"
            name="subject"
            value={emailData.subject}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="fromEmail"
            value={emailData.fromEmail}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={emailData.message}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Send</button>
      </form>
    </>
  );
};

export default EmailForm;
