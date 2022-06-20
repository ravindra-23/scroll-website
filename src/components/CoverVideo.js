import React from 'react'
import styled from 'styled-components'
import MainVideo from '../assets/Walking Girl.mp4'
import { motion } from 'framer-motion'

const container = {
  hidden: {
    opacity: 0,
  },

  show: {
    opacity: 1,

    transition: {
      duration: 2,
      ease: 'easeInOut'
    }
  }
}

const VideoContainer = styled.section`
    width: 100%;
    height: 100vh;
    position: relative;

    video {
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }
`;

const Title = styled(motion.div)`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.text}
`;

const TitleText = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 10em;
    text-shadow: 1px 1px 1px ${props => props.theme.body}
`;

const Subtitle = styled.h2`
    font-family: 'Poppins', sans-serif;
    font-size: ${props => props.theme.fontlg};
    text-shadow: 1px 1px 1px ${props => props.theme.body}
`;

const DarkOverlay = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    background-color: ${props => `rgba(${props.theme.bodyRgba}, 0.6)`}
`;

const CoverVideo = () => {
  return (
    <VideoContainer>
        <DarkOverlay />
          <Title variants={container} initial="hidden" animate="show">
            <div>
              <TitleText data-scroll data-scroll-speed='4'>Fashion</TitleText>
            </div>
            <Subtitle data-scroll data-scroll-speed='2'>Inspire.Create.Belive</Subtitle>
          </Title>
        <video src={MainVideo} typeof='video/mp4' autoPlay muted loop />
    </VideoContainer>
  )
}

export default CoverVideo