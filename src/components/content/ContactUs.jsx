import React from "react";
import styles from "../../style";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <section className="bg-natural-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className={`${styles.heading}`}>Contact Us</h2>
        <p
          className={`${styles.paragraph} ${styles.textPadding} text-center text-neutral-400 sm:text-xl`}
        >
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </p>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactUs;
