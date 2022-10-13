import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutUs.css'
import Card from '../../components/Card'

import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import AboutUsCard from '../../components/AboutUsCard/AboutUsCard';
import AboutUsChart from '../../components/AboutUsChart/AboutUsChart';
import AboutUsProjectCard from '../../components/AboutUsProjectCard/AboutUsProjectCard';

function AboutUs() {
  return (
    <div className='AboutUs'>
        <div>
          <Navigation/>
        </div>
        <div>
          <AboutUsCard/>
        </div>

        <div className='chart'>
          <AboutUsChart/>
          <AboutUsChart/>
          <AboutUsChart/>
          <AboutUsChart/>
          <AboutUsChart/>
          <AboutUsChart/>
        </div>

        <div className='aboutUsCardStyle'>
          <AboutUsProjectCard/>
          <AboutUsProjectCard/>
          <AboutUsProjectCard/>
        </div>

        <div>
          <Footer/>
        </div>
        
    </div>
  )
}

export default AboutUs;
