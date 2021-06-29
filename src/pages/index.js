import React from 'react';

import Layout from '../components/layout';
import MainSection from '../components/mainSection';
import SkillSection from '../components/skillSection';
import BlogSection from '../components/blogSection';
import ContactSection from '../components/contactSection';
import PortfolioSection from '../components/portfolioSection';

const Index = () => {
  return (
    <Layout>
      <MainSection />
      <SkillSection />
      <PortfolioSection />
      <BlogSection />
      <ContactSection />
    </Layout>
  );
}

export default Index;
