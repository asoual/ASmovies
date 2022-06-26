import React, {useState, useEffect} from 'react';
import logo_AS from './ASMOVIES.jpg'
import logo_av from './avatar.jpg'
import './Nav.css'

function Nav() {
  const [show, setShow] = useState(false)
  const controlNavbar = () => {
      if (window.scrollY > 250 ) {
          setShow(true)
      }else{
        setShow(false)
      }
  }

  useEffect(() => {
      window.addEventListener('scroll', controlNavbar)
      return () => {
          window.removeEventListener('scroll', controlNavbar)
      }
  }, [])
  return (
    <div className={`nav ${show && 'nav__black'}`}>
        <img 
            className='nav_logo'
            src={logo_AS} //not working
            alt="ASmovies logo"
        
        />
        <img 
            className='nav_avatar'
            src={logo_av}
            alt="avatar"
        />
    </div>
  );
}

export default Nav