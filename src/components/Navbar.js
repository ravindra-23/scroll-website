import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion';

const NavContainer = styled(motion.div)`
    width: 100vw;
    z-index : 6;
    position: absolute;
    top: ${props => props.show ? '0' : `-${props.theme.navHeight}`};
    display: flex;
    justify-content: center;
    align-items : center;

    transition: all 0.3s ease;
`;

const MenuBtn = styled.li`
    background-color: ${props => `rgba(${props.theme.textRgba},0.7)`};
    list-style-type: style none;
    color : ${props => props.theme.body};
    width : 15rem;
    height : 2.5rem;
    clip-path : polygon(0 0,100% 0, 80% 100%, 20% 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${props => props.theme.fontmd};
    font-weight: 600;
    text-transform: uppercase;
    cursor: pointer;

    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
`;

const MenuItems = styled.ul`
    position: relative ;
    height: ${props => props.theme.navHeight};
    background-color: ${props => props.theme.body };
    color: ${props => props.theme.text};
    list-style : none;
    display: flex;
    justify-content : space-around;
    align-items: center;
    width: 100%;
    padding: 0 10rem;
`;

const MenuItem = styled.li`
    text-transform: uppercase;
    color: ${props => props.theme.text}
`

const Navbar = () => {
  const [show, setShow] = useState(false)
  return (
    <NavContainer show={show}
        initial={{
            y: '-100%'
        }}
        animate={{
            y: 0
        }}
        transition={{
            duration: 1, delay: 1
        }}
    >
        <MenuItems>
            <MenuBtn onClick={() => setShow(!show)}>Menu</MenuBtn>
            <MenuItem>Home</MenuItem>
            <MenuItem>About</MenuItem>
            <MenuItem>Shop</MenuItem>
            <MenuItem>Services</MenuItem>
            <li>Home</li>
        </MenuItems>
    </NavContainer>
  )
}

export default Navbar