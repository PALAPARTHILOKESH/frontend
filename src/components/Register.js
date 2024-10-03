import React, { useState } from 'react';
import '../styles/Register.css'; 
import Navbar from './Navbar';
const Register = () => {
  const [data, setData] = useState({
    firstname: '',
    lastname: '',
    dateofbirth: '',
    email: '',
    username: '',
    password: '',
    confirmpassword: '',
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here (e.g., API call)
    console.log('Form submitted', data);
  };

  return (
    <><Navbar />
      <div className='register-paper'>
        <h1 className='h1'>Registration Form</h1>
        <form onSubmit={handleSubmit}>
          <label>First Name</label>
          <input
            type='text'
            placeholder='Enter your First Name'
            id='firstname'
            value={data.firstname}
            onChange={handleChange}
            required
          />

          <label>Last Name</label>
          <input
            type='text'
            placeholder='Enter your Last Name'
            id='lastname'
            value={data.lastname}
            onChange={handleChange}
            required
          />

          <label>Date of Birth</label>
          <input
            type='date'
            id='dateofbirth'
            value={data.dateofbirth}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            type='email'
            id='email'
            placeholder='Enter your email'
            value={data.email}
            onChange={handleChange}
            required
          />

          <label>Username</label>
          <input
            type='text'
            id='username'
            placeholder='Enter a unique username'
            value={data.username}
            onChange={handleChange}
            required
          />

          <label>Password</label>
          <input
            type='password'
            id='password'
            placeholder='Enter password'
            value={data.password}
            onChange={handleChange}
            required
          />

          <label>Confirm Password</label>
          <input
            type='password'
            id='confirmpassword'
            placeholder='Enter password again'
            value={data.confirmpassword}
            onChange={handleChange}
            required
          />

          <button type='submit'>Submit</button>
        </form>
      </div>
        <br/><br/><br/>
    </>
  );
};

export default Register;
