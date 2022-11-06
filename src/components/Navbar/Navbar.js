import React from 'react';
import  { NavLink }  from 'react-router-dom'
import './navbar.css';

function Navbar() {
  return (
    <nav className='nav'>
        <div className='logo'> 
          <div className='name'> 
            <p className='logo-text'> AW </p>
          </div> 
        </div>
        <ul className='navigation'>
            <li> 
              <NavLink 
                to='/'
                className={({isActive}) => isActive ? "activeLink" : "link"}
              >
               Home                
              </NavLink>             
            </li>
            <li> 
              <NavLink 
                to='/portefolio'
                className={({isActive}) => isActive ? "activeLink" : "link"}
              >
              Portefolio              
              </NavLink>             
            </li>
            <li> 
              <NavLink 
                to='/contact'
                className={({isActive}) => isActive ? "activeLink" : "link"}
              >
              Contact               
              </NavLink>             
            </li>
        </ul>
    </nav>
  )
}
export default Navbar