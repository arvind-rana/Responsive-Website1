import React from 'react';
import Common from './Common'
import Web from '../src/images/image2.svg'

const Home = () => {
    return (
        <>
        <Common name='Grow your thinking skills....'
          mid='With FfF...'
          last='this is best platform form imporove your skill...'
          visit = '/about'
          btname = 'About Now'
          imgsrc = {Web}
        />
        </>
    )
}
export default Home; 