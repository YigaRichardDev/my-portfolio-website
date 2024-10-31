import React from 'react';
import PageTitle from '../components/pageTitle/PageTitle';
import ProjectsInvolved from '../components/projects/ProjectsInvolved';
import Testimonials from '../components/testimonials/Testimonials';
import CallToAction from '../components/callToAction/CallToAction';

const PortfolioPage: React.FC = () => {
  return (
    <>
      <PageTitle title='Projects' span='Involved'/>
      <ProjectsInvolved/>
      <Testimonials/>
      <CallToAction/>
    </>
  )
}

export default PortfolioPage;
