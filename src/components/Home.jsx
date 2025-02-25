import React from 'react'
import "../css/Home.css"
// import Navbar from './Navbar'

const Home = () => {
  return (
  <>
    {/* <Navbar /> */}
  
    <div className = 'whole-page'>

      {/* Home Screen Slide Show */}
      <div className = 'home-page' id='/'> 

        <div className='slideshow-fade'>
          <img src="/images/cor1.png" alt=" slide-1" />
        </div>

        <div className='slideshow-fade'>
          <img src="/images/cor2.png" alt=" slide-2" />
        </div>

        <div className='slideshow-fade'>
          <img src="/images/cor3.png" alt=" slide-3" />
        </div>

        <div className='slideshow-fade'>
          <img src="/images/cor2.png" alt=" slide-4" />
        </div>

      </div>

    </div>
  </>
  )
}

export default Home
