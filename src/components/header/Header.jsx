import React, {useState} from 'react'
import styled from 'styled-components'
import Menu from './menu/Menu';
import Nav from './nav/Nav';

const HeaderStyled = styled.header`
display: flex;
justify-content: space-between;
position: relative;
padding: 10px;
min-height: 10vh;
`

const Header = () => {
    const [click, setClick] = useState(false);
    const clicked = () => {
        setClick(!click)
    };
  return (
    <HeaderStyled>
      <Nav click={click} clicked={clicked}/>
      <Menu click ={click} clicked ={clicked}/>
    </HeaderStyled>
  )
}

export default Header