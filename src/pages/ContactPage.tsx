import React from 'react';
import PageTitle from '../components/pageTitle/PageTitle';
import Contact from '../components/contact/Contact';
import FAQ from '../components/faq/Faq';

const ContactPage: React.FC = () => {
  return (
    <>
      <PageTitle title='Contact' span='Me'/>
      <Contact/>
      <FAQ/>
    </>
  )
}

export default ContactPage;
