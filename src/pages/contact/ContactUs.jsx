import React, { useState } from 'react';
import './contact.css';
import axios from 'axios';
import { Footer, HeroHeader, Navbar } from '../../components';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://api.emailjs.com/api/v1.0/email/send',
        {
          service_id: 'YOUR_EMAILJS_SERVICE_ID',
          template_id: 'YOUR_EMAILJS_TEMPLATE_ID',
          user_id: 'YOUR_EMAILJS_USER_ID',
          template_params: formData,
        }
      );

      console.log(response);
      // Clear the form after successful submission
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="main-container">
        <Navbar />
        <HeroHeader title={'ContactUs'} />
        <div className="br-our-ContactUs">
          <h1>Ready to get started?</h1>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name *"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email *"
              required
            />
            <input
              type="tel"
              name="number"
              value={formData.number}
              onChange={handleChange}
              placeholder="Phone *"
              required
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject *"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ContactUs;
