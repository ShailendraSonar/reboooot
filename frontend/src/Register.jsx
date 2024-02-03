// Register.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Login from './Login';

const Register = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [roles, setRoles] = useState('');

    const navigate = useNavigate();



  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:3001/register', {
        firstname,
        lastname,
        email,
        password,
        roles,
      });
      console.log(response.data);
      navigate('/login');
    } catch (error) {
      console.error(error.response.data);
    }
  };

  const LoginPage =()=>{
    navigate('/login');
  }

  return (
    <div>
      <h1>Register</h1>
      <input type="text" placeholder="First Name" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
      <input type="text" placeholder="Last Name" value={lastname} onChange={(e) => setLastname(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <input type="text" placeholder="Roles" value={roles} onChange={(e) => setRoles(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
      <button onClick={LoginPage}>Already a user: Log-In</button>
    </div>
  );
};

export default Register;
