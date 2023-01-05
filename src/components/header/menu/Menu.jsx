import React from 'react'
import styled from 'styled-components'

const MenuStyled = styled.h2`
z-index: 1;
font-family: Arial, Helvetica, sans-serif;
@media (min-width: 720px){
display: none;
}
`;

const Menu = ({click, clicked}) => {
  return (
    <MenuStyled onClick={clicked}>
      {click ? "X": "M"}
    </MenuStyled>
  )
}

export default Menu