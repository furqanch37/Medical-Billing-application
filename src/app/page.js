import React from 'react'
import InfoSection from './Home/InfoSection/InfoSection'
import MedicalFeatures from './Home/MedicalFeatures/MedicalFeatures'
import Services from './Home/Services/Services'
import Testimonials from './Home/Testimonials/Testimonials'
import HeroSection from './Home/HeroSection/HeroSection'

const page = () => {
  return (
    <div>
      <HeroSection />
      <InfoSection />
      <MedicalFeatures />
      <Services />
      <Testimonials />
    </div>
  )
}

export default page
