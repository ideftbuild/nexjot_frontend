import React from 'react'; // Importing React for the functional component
import Banner from './PageBanner'; // Importing the Banner component for the landing page
import Header from './LandingHeader'; // Importing the Header component for the landing page
import Features from './LandingFeatures'; // Importing the Features component for the landing page
import Footer from './LandingFooter'; // Importing the Footer component for the landing page

// Importing various CSS stylesheets for animations, bootstrap, and custom styles
import '../styles/animate.css';
import '../styles/bootstrap.min.css';
import '../styles/header.css';
import '../styles/core_responsive.css';
import '../styles/core.css';

// Functional component for the LandingPage
const LandingPage = () => {
  
  // The main return block of the LandingPage component
  return (
    // A flex container to ensure all elements are displayed in a column, and the page takes up the full height of the viewport
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#001f7a' }}>
      
      {/* Renders the Header component at the top of the page */}
      <Header />
      
      {/* Renders the Banner component (with potential background image, welcome message, etc.) */}
      <Banner />
      
      {/* Renders the Features section, likely showing various platform features */}
      <Features />
      
      {/* Renders the Footer component at the bottom of the page */}
      <Footer />
      
    </div>
  );
};

// Exporting the LandingPage component to be used in other parts of the application
export default LandingPage;
