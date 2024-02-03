import React from 'react'
import { useNavigate } from 'react-router-dom';

const Sponser = () => {

    const navigate = useNavigate();

    const logout = ()=>{

        localStorage.removeItem('userrole');
        navigate('/');
    }
  return (
    <>
    <h1>Sponser Page</h1>
    <button onClick={logout}>Log out</button>
    </>
  )
}

export default Sponser