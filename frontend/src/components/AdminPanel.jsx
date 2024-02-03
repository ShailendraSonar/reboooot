import React from 'react'
import axios from 'axios';
import  { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminPanel = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    const logout = ()=>{

        localStorage.removeItem('userrole');
        
        navigate('/');
    }

    useEffect(() => {
        async function fetchData() {
          try {
            const response = await axios.get('http://localhost:3001/allUser');
            setUsers(response.data);
          } catch (error) {
            console.error('Error fetching users:', error);
          }
        }
        fetchData();
    }, []);

    const currentUrl = window.location.href;

  console.log(currentUrl)
  return (
    <>
        <h1>Admin Panel</h1>



        <button onClick={logout}>Log out</button>

        <div>
      <h3>Our All Users Data</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{`${user.firstname} ${user.lastname} -${user.roles} - ${user.email}`}</li>
        ))}
      </ul>
    </div>

    </>
  )
}

export default AdminPanel