import React from 'react'
import HomeServices from '../components/HomeServices'
import Diagnosis from '../components/Diagnosis'
import ServiceBanner from '../components/ServiceBanner'

const Services = () => {
  return (
    <div>
      <ServiceBanner/>
      <HomeServices />
      <Diagnosis />
    </div>
  )
}

export default Services
