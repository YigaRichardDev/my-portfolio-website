import React from 'react';
import PageTitle from '../components/pageTitle/PageTitle';
import Background from '../components/background/Background';
import Approach from '../components/approach/Approach';
import Mission from '../components/mission/Mission';
import Experience from '../components/experience/Experience';
import Testimonials from '../components/testimonials/Testimonials';
import CallToAction from '../components/callToAction/CallToAction';

const About: React.FC = () => {
  return (
    <>
   <PageTitle title='About' span='Me'/>
   <Background/>
   <Mission/>
   <Approach/>
   <Experience/>
   <Testimonials/>
   <CallToAction/>
    </>
  )
}

export default About;
