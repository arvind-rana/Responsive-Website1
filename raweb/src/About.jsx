import React from 'react';
import Common from './Common'
import Web from '../src/images/image2.svg'

const About = () => {
    return (
        <>
            <Common name='Welcome to about page'
                imgsrc = {Web}
                visit = '/contact'
                btname = 'Contact Now'
            />
        </>
    )
}
export default About;