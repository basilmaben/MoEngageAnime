/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Menu } from 'antd';
import axios from 'axios';
import { USER_SERVER } from '../../../Config';
import { withRouter, Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import styled from 'styled-components';

function RightMenu(props) {
  const user = useSelector(state => state.user)

  const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then(response => {
      if (response.status === 200) {
        props.history.push("/login");
      } else {
        alert('Log Out Failed')
      }
    });
  };

  if (user.userData && !user.userData.isAuth) {
    return (
      <Menu mode={props.mode}>
        {/* <Menu.Item key="mail" > */}
           <NavBtnLink to='/login'>Sign In</NavBtnLink>
        {/* </Menu.Item> */}
       {/* <Menu.Item key="app"> */}
          <NavBtnLink1 to='/register'>Sign Up</NavBtnLink1>
        {/* </Menu.Item> */}
      </Menu>
    )
  } else {
    return (
      <Menu mode={props.mode}>
        <NavBtnLink to = '/' onClick={logoutHandler}>Log Out</NavBtnLink>
      </Menu>
    )
  }
}



export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #1DB954;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`
  export const NavBtnLink1 = styled(Link)`
  border-radius: 4px;
  background: black;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export default withRouter(RightMenu);

