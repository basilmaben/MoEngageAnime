import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavBtnLink1
} from './NavbarElements';

import logo from '../../logo.svg'

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={logo} height='200px' width='200px' alt='logo' />
        </NavLink>
        <Bars />
        <NavMenu>
            
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/sign-up'>Sign Up</NavBtnLink>
          <NavBtnLink1 to='/signin'>Sign In</NavBtnLink1>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;