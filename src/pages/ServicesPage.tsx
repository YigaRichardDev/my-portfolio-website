import React from 'react';
import PageTitle from '../components/pageTitle/PageTitle';
import MyServices from '../components/services/MyServices';
import Development from '../components/developmentProcess/Development';
import Pricing from '../components/pricing/Pricing';
import CallToAction from '../components/callToAction/CallToAction';

const Services: React.FC = () => {
  return (
    <>
      <PageTitle title='Our' span='Services'/>
      <MyServices/>
      <Development/>
      <Pricing/>
      <CallToAction/>
    </>
  )
}

export default Services;
