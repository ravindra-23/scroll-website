import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/Svgs/star_white_48dp.svg'

import { motion } from 'framer-motion'

const Footer = () => {

const Section = styled.section`
    min-height: 100vh;
    width: 100vw;
    margin: 5rem auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
    position: relative;
`

const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center
    align-items: center;

    img {
        width: 10vw;
        height: auto;
    }

    h3 {
        font-size:${props => props.theme.fontx1};
        font-family: 'Poppins', sans-serif;  
    }  
`

const FooterComponent = styled(motion.footer)`
    width: 80vw;

    ul {
        list-style-type: none;
        display:flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        margin: 2rem;
        margin-top: 4rem;
        padding: 1rem;
        border-top: 1px solid ${props => props.theme.text};
        border-bottom: 1px solid ${props => props.theme.text};;
    }

    li {
        padding: 2rem;
        font-size:${props => props.theme.fontlg};
        text-transform: uppercase;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
            transform: scale(1.1);
        }
    }
`

const Bottom = styled.div`
    padding: 0.5rem 0;
    margin: 0 4rem;
    font-size:${props => props.theme.fontlg};
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
        text-decoration: underline;
        margin-left: 10px;
    }
`

  return (
    <Section>
        <LogoContainer>
            <img src={Logo} alt='logo'  data-scroll data-scroll-speed="2" />
            <h3 data-scroll data-scroll-speed="-1">Fashion Studio</h3>
        </LogoContainer>
        <FooterComponent
            initial={{y: "-400px"}}
            whileInView={{y:0}}
            viewport={{once:false}}
            transition={{
                duration:1.5
            }}
        >
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Shop</li>
                <li>New arrival</li>
                <li>
                    <a href="http://google.com" target="_blank" rel="noreferrer">
                        Look book
                    </a>
                </li>
                <li>
                    <a href="http://google.com" target="_blank" rel="noreferrer">
                        Reviews
                    </a>
                </li>
            </ul>
            <Bottom>
                <span data-scroll data-scroll-speed="2" data-scroll-direction="horizontal">&copy; {new Date().getFullYear()}. All Rights Reserved.</span>
                <span data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">Made with &hearts; by
                <a href="https://github.com/ravindra-23" target="_blank" rel="noreferrer">
                    Ravindra
                </a>
                </span>
            </Bottom>
        </FooterComponent>
    </Section>
  )
}

export default Footer