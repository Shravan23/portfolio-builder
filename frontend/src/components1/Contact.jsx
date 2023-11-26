// Contact.jsx
import React from 'react';

const Contact = ({ formData, handleInputChange }) => {
  const labelStyle = { marginBottom: '10px' };

  return (
    <>
      <h2>Personal Details</h2>
      <label style={labelStyle}>
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label style={labelStyle}>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label style={labelStyle}>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label style={labelStyle}>
        Phone Number:
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label style={labelStyle}>
        Address Line 1:
        <input
          type="text"
          name="addressLine1"
          value={formData.addressLine1}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label style={labelStyle}>
        City:
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label style={labelStyle}>
        State:
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label style={labelStyle}>
        Postal Code:
        <input
          type="text"
          name="postalCode"
          value={formData.postalCode}
          onChange={handleInputChange}
        />
      </label>
      <br />
    </>
  );
};

export default Contact;
