import Link from "next/link"
import Image from "next/image";
import React, { useState } from 'react';
import instagramPic from '../images/instagram.png';
import linkedInPic from '../images/linkedin.png';

const columnStyle = {
  marginRight: '20px',  // Adjust the margin as needed
};

function Inquiries() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    details: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you can perform any actions you want with the form data.
    // For now, we will just log the data to the console.
    console.log(formData);
    // You can also send the form data to a server or save it to a database.
    // For that, you'll need to set up a server-side endpoint to handle the form submission.
    // We will use Microsoft Azure for this
  };

  return (
    <div className="wrapper">
      <div className="container mt-4">
        <h1>Submit Inquiries</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="details" className="form-label">
              Details
            </label>
            <textarea
              id="details"
              name="details"
              value={formData.details}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      {/* Border separating content from footer */}
      <hr className="my-4" />
      
    </div>
  );
}

export default Inquiries;