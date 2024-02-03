import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {


    const navigate = useNavigate();

    const Login = ()=>{
        navigate('/login');
    }
    const register = ()=>{
        navigate('/register');
    }
  return (
    <>
        <h1>This is a Home Page</h1>

        <button onClick={Login}>Login</button>
        <button onClick={register}>register</button>

</>
  )
}

export default HomePage