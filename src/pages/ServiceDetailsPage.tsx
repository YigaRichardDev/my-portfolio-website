import React from 'react'
import ServiceDetails from '../components/services/ServiceDetails'
import Pricing from '../components/pricing/Pricing'

const ServiceDetailsPage: React.FC = () => {
  return (
    <div>
      <ServiceDetails/>
      <Pricing/>
    </div>
  )
}

export default ServiceDetailsPage
