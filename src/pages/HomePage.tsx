
import React, { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturedServices from '../components/home/FeaturedServices';
import Testimonials from '../components/home/Testimonials';
import BlogPosts from '../components/home/BlogPosts';
import Newsletter from '../components/home/Newsletter';
import Notifications from '../components/common/Notifications';

const HomePage: React.FC = () => {
  useEffect(() => {
    // Update document title with editable content
    const title = document.querySelector('meta[name="title"]')?.getAttribute('content') || 'AstroPuja - Ancient Wisdom for Modern Lives';
    document.title = title;
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Notifications />
      <HeroSection />
      <FeaturedServices />
      <Testimonials />
      <BlogPosts />
      <Newsletter />
    </>
  );
};

export default HomePage;
