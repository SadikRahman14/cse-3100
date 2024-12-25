import React, { useRef } from 'react';

const ContactUs = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const messageRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form submitted!');
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;
    const message = messageRef.current.value;

    console.log(`${name} has a Message: ${message}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone}`);

    alert(`Submitted Successfully`);
  }

  return (
    <div className="container my-4">
      <h2>Contact Us</h2>
      <p>If you have any questions, feel free to reach out to us!</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            placeholder="Enter your name"
            ref={nameRef}
          />
        </div>
        <div className="mb-3">
          <label>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            placeholder="Enter your email"
            ref={emailRef}
          />
        </div>
        <div className="mb-3">
          <label>
            Phone
          </label>
          <input
            type="number"
            name="phone"
            className="form-control"
            placeholder="+8801..."
            ref={phoneRef}
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            rows="5"
            placeholder="Write your message here"
            ref={messageRef}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
