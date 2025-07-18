import React from 'react'
import Hero from '../components/Hero'
import HomeAbout from '../components/HomeAbout'
import HomeServices from '../components/HomeServices'
import Choose from '../components/Choose'
import CheckUp from '../components/CheckUp'
import Testimonials from '../components/Testimonials'
import Diagnosis from '../components/Diagnosis'

const Home = () => {
  return (
    <>
      <Hero />
      <HomeAbout />
      <HomeServices />
      <Choose />
      <CheckUp />
      {/* <Testimonials /> */}
      <Diagnosis />
    </>
  )
}

export default Home
