import React from 'react'
import { Navigate } from 'react-router-dom'
import '../css/Navbar.css'

const Navbar = () => {

  return (
    <>
       <nav className = 'nav'>

            <div className = 'logo'>
                <img src="/images/logot.png" alt="site logo" onClick={() => Navigate("/")} />
            </div>

            <div className = 'menu'>
                <ul className='menu-list'>
                  
                  <li className='menu-item'>
                    <a href = '/' activeClassName='active'>Home</a>
                  </li>

                  <li className='menu-item'>
                    <a href = '/services' activeClassName='active'>Services</a>
                  </li>

                  <li className='menu-item'>
                    <a href = '/about' activeClassName='active'>About Us</a>
                  </li>

                  <li className='menu-item'>
                    <a href = '/help' activeClassName='active'>Help</a>
                  </li>

                  <li className='menu-item'>
                    <a href = '/login' activeClassName='active'>Login</a>
                  </li>
                  
                </ul>
            </div>

        </nav> 
    </>
  )
}

export default Navbar





