import React from 'react'
import { Navigate, NavLink} from 'react-router-dom'

const Navbar = () => {

  return (
    <>
       <nav className = 'nav'>

            <div className = 'logo'>
                <img src="C:\Users\L6-09\Desktop\Project\old\CPP\agro-vision\public\images\logot.png" alt="site logo" onClick={() => Navigate('/')} />
            </div>

            <div className = 'menu'>
                <NavLink to = '/' activeClassName='active'>Home</NavLink>
                <NavLink to = '/services' activeClassName='active'>Services</NavLink>
                <NavLink></NavLink>
            </div>

        </nav> 
    </>
  )
}

export default Navbar