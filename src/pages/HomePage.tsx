import React from "react";
import Hero from "../components/hero/Hero";
import Services from "../components/services/Services";
import LatestProjects from "../components/projects/LatestProjects";
import Testimonials from "../components/testimonials/Testimonials";
import CallToAction from "../components/callToAction/CallToAction";

const Home: React.FC = () => {
  return (
    <>
     <Hero/>
     <Services/>
     <LatestProjects/>
     <Testimonials/>
     <CallToAction/>
    </>
  );
};

export default Home;
