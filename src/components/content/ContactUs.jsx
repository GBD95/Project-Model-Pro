import React from "react";
import styles from "../../style";

const ContactUs = () => {
  return (
    <section className='bg-natural-900'>
      <div className='py-8 lg:py-16 px-4 mx-auto max-w-screen-md'>
        <h2 className={`${styles.heading}`}>Contact Us</h2>
        <p
          className={`${styles.paragraph} ${styles.textPadding} text-center text-neutral-400 sm:text-xl`}
        >
          Got a technical issue? Want to send feedback about a beta feature? Need details about our
          Business plan? Let us know.
        </p>
        <form action='#' className='space-y-8'>
          <div>
            <label
              htmlFor='email'
              className='block mb-2 text-sm font-medium text-neutral-900 dark:text-neutral-300'
            >
              Your email
            </label>
            <input
              type='email'
              id='email'
              className='shadow-sm bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
              placeholder='name@flowbite.com'
              required
            />
          </div>
          <div>
            <label
              htmlFor='subject'
              className='block mb-2 text-sm font-medium text-neutral-900 dark:text-neutral-300'
            >
              Subject
            </label>
            <input
              type='text'
              id='subject'
              className='block p-3 w-full text-sm text-neutral-900 bg-neutral-50 rounded-lg border border-neutral-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
              placeholder='Let us know how we can help you'
              required
            />
          </div>
          <div className='sm:col-span-2'>
            <label
              htmlFor='message'
              className='block mb-2 text-sm font-medium text-neutral-900 dark:text-neutral-400'
            >
              Your message
            </label>
            <textarea
              id='message'
              rows='6'
              className='block p-2.5 w-full text-sm text-neutral-900 bg-neutral-50 rounded-lg shadow-sm border border-neutral-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
              placeholder='Leave a comment...'
            ></textarea>
          </div>
          <button
            type='submit'
            className='py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-neutral-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
