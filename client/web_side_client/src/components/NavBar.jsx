import React from 'react'
import { Link, useNavigate } from 'react-router-dom';


const NavBar = () => {
  const navigate = useNavigate();

  return (
    <div style={{textAlign: "center"}}>  

<button onClick={() => navigate('/movies')}>Movies</button>

<button onClick={() => navigate('/subscriptions')}>Subscriptions</button>

<button onClick={() => navigate('/user-management')}>User Management</button>

<button onClick={() => navigate('/')}>Logout</button>

   
  </div>
  )
}

export default NavBar