import React from 'react'
import styled from 'styled-components'
import CoverVideo from '../components/CoverVideo'
import Navbar from '../components/Navbar'

const Section = styled.section`
position: relative;
min-height: 100vh;
overflow: hidden;
`

const Home = () => {
  return (
    <Section>
        <CoverVideo />
        <Navbar />
    </Section>
  )
}

export default Home