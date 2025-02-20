import React from 'react'
import { Navigate, NavLink} from 'react-router-dom'
import '../css/Navbar.css'

const Navbar = () => {

  return (
    <>
       <nav className = 'nav'>

            <div className = 'logo'>
                <img src="C:\Users\L6-09\Desktop\Project\old\CPP\agro-vision\public\images\logot.png" alt="site logo" onClick={() => Navigate("/")} />
            </div>

            <div className = 'menu'>
                <ul className='menu-list'>
                  
                  <li className='menu-item'>
                    <NavLink to = '/' activeClassName='active'>Home</NavLink>
                  </li>

                  <li className='menu-item'>
                    <NavLink to = '/services' activeClassName='active'>Services</NavLink>
                  </li>

                </ul>
            </div>

        </nav> 
    </>
  )
}

export default Navbar