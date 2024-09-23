import React from 'react';

// The array holding the feature data including image, title, description, and animation duration.
const featuresData = [
  {
    id: 1, // The unique identifier for each feature
    imgSrc: 'src/images/features/pages.png', // Path to the image for this feature
    title: 'Real-Time Document Editing', // Feature title
    description: 'The platform allows users to create and edit documents in real-time.', // Short description of the feature
    duration: '1.5s' // Duration for animation effect
  },
  {
    id: 2,
    imgSrc: 'src/images/features/eye.png',
    title: 'Document Preview',
    description: 'Users can preview their documents before editing or making changes, helping them to quickly identify and select the right file.',
    duration: '2s'
  },
  {
    id: 3,
    imgSrc: 'src/images/features/search.png',
    title: 'Search Functionality',
    description: 'A search feature is integrated into the dashboard, enabling users to easily locate specific documents within their workspace.',
    duration: '2.5s'
  },
  {
    id: 4,
    imgSrc: 'src/images/features/content-creator.png',
    title: 'Text Editor with Basic Functionalities',
    description: 'The platform includes a text editor, built using Vite React, which supports basic text manipulation features.',
    duration: '3s'
  },
  {
    id: 5,
    imgSrc: 'src/images/features/webpage.png',
    title: 'Responsive Dashboard',
    description: 'The dashboard provides a streamlined, user-friendly interface that supports navigation, document previews, and editing features across different devices.',
    duration: '3.5s'
  },
  {
    id: 6,
    imgSrc: 'src/images/features/burger-menu.png',
    title: 'Dropdown Menu for Document Actions',
    description: 'A menu that provides quick access to various document actions like viewing, editing, and navigating to other sections of the platform.',
    duration: '4s'
  },
];

// Functional component to display the features section.
const Features = () => {
  return (
    // Section container for the features, styled with background color.
    <section className="features-tag" id="features" style={{ backgroundColor: '#001f7a' }}>

      {/* Container for holding the feature content */}
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            {/* Title and subtitle for the features section */}
            <div className="section-title-item" style={{ marginTop: '150px', color:'#FFFFFF'}}>
              <small className="gl-section-title">What You Get With NextJot</small>
              <h2 className="section-title">Amazing Features</h2>
            </div>
          </div>
        </div>

        {/* Wrapper for the individual feature items */}
        <div className="featured-items">
          <div className="row">
            {/* Iterate over the featuresData array to create feature items */}
            {featuresData.map((feature) => (
              <div
                key={feature.id} // Unique key for each item in the list
                className={`col-md-4 wow fadeInUp`} // CSS class for styling and animation
                data-wow-duration={feature.duration} // Animation duration controlled by data attribute
              >
                {/* Single feature item */}
                <div className="icon-featured-item">
                  {/* Image for the feature */}
                  <img src={feature.imgSrc} alt={feature.title} width="70%" style={{ marginTop: '50px'}}/>
                  {/* Title of the feature */}
                  <h3 className="feature-title" style={{color:'#FFFFFF'}}>{feature.title}</h3>
                  {/* Description of the feature */}
                  <p>{feature.description} </p>
                </div>
              </div>
            ))}
          </div>

          {/* Extra circle element at the bottom of the features section */}
          <div className="featured-circle-element wow fadeInUp" data-wow-duration="1.5s">
            <p id="circle" className="circle-element">&nbsp;</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
