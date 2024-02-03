import React from 'react'
import { useNavigate } from 'react-router-dom';

const Speaker = () => {

    const navigate = useNavigate();

    const logout = ()=>{

        localStorage.removeItem('userrole');
        navigate('/');
    }

  return (
    <>
      <h1>Speaker Page</h1>
      <button onClick={logout}>Log out</button>
    </>
  )
}

export default Speaker