import React from 'react'
import Hero from '../hero';
import DetailBoxes from '../home';
import Time from '../time';
import Whysection from '../whysec';
import Coaches from '../coaches';
import BMICalculator from '../bmi';
import Pricing from '../pricing';
import Footer from '../footer';



function Home() {
  return (
    <>
      <Hero />
      <DetailBoxes />
      <Time/>
      <Whysection/>
      <Coaches/>
      <BMICalculator/>
      <Pricing/>
      <Footer/>
    </>
  )
}

export default Home