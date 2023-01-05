import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import {favsContext} from "../../../context/favsContext"
import {userContext} from "../../../context/userContext"

const NavStyled = styled.nav`
  position: absolute;
  left: 0;
  top: ${(props) => (props.show ? "10vh" : "-500px")};
  transition: top 1s ease;
  width: 100vw;
  background-color: black;
  @media (min-width: 720px) {
    position: relative;
    top: ${(props) => (props.show ? "10vh" : "0")};
    
    width: initial;
    background-color: transparent;
  }
`;

const LinkStyled = styled(Link)`
  display: inline-block;
  width: 100%;
  text-align: center;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 2rem;
  margin: 10px 0;
  @media (min-width: 720px) {
    width: initial;
    margin: 0 110px;
    text-decoration: none;
  }
`;

const Nav = ({click, clicked}) => {
  const { user } = useContext(userContext);
  

  return (
    <NavStyled show={click} unclick={clicked}>
    <LinkStyled to="/">HOME</LinkStyled>
    {user && <LinkStyled to="/favs">FAVORITES</LinkStyled>}
    {!user && <LinkStyled to="/register">REGISTER</LinkStyled>}
    {!user && <LinkStyled to="/login">LOGIN</LinkStyled>}
    {user && <LinkStyled to="/logout">LOGOUT</LinkStyled>}
    {user && <LinkStyled to="/editProfile">EDIT</LinkStyled>}
    </NavStyled>
   
  )
}

export default Nav