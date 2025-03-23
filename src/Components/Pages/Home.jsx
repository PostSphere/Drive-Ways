import React from 'react'
import ImageCarousel from '../carousels'
import AboutSection from '../AboutSection'
import Header from '../NavBar'
import Deals from '../Deals'
import HowItWorks from '../HowItWorks'
import Footer from '../Footer'


const Home = () => {
  return (
    <>
    <div>
     <Header/>
       <ImageCarousel/>
       <AboutSection/>
       <HowItWorks/>
      <Deals/>

     <Footer/>

    </div>
    </>
  )
}

export default Home
