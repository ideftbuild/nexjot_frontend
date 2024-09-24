import React from 'react'; // Import React for functional components
import {useNavigate} from 'react-router-dom';

// Functional component for the banner section
const Banner = () => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate('/login');
  }

  return (
    // Main banner section with an id for particle.js effects (if used)
    <section className='banner-tag' id='particles-js-x'>
      {/* Background image for the banner with center alignment and cover style */}
      <div
        className='banner-item'
        style={{
          background: "url('src/images/banner/banner_bg.jpg') no-repeat center center / cover"
        }}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 mx-auto'>
              {/* Main content of the banner */}
              <div className='banner-content'>
                {/* Banner title with large font size and white color */}
                <h1 className='banner-title' style={{ fontSize: '50px', color:'#FFFFFF', marginBottom: '50px' }}>
                  Welcome to NextJot!
                </h1>
                {/* Banner subtitle with margin and white color */}
                <h2 style={{ margin: '20px 10px 30px 5px', color: '#FFFFFF' }}>
                  Your Ultimate Workspace for Effortless Document Editing
                </h2>
                {/* Call-to-action button for signup */}
                <button className='btn btn-primary' style={{ fontSize: '20px', padding: '10px 20px' }} onClick={handleLoginRedirect}>
                  GET STARTED
                </button>
              </div>
            </div>
          </div>
          
          {/* Additional intro content with banner images and description */}
          <div className='row intro'>
            {/* Left column for images */}
            <div className='col-md-7 wow fadeInUp' data-wow-duration='2.5s'>
              <div className='banner-image-item'>
                {/* Main banner image */}
                <img className='banner-img' src={'/src/images/banner/banner_img.png'} alt='' />
                {/* Additional icons or images positioned around the main banner image */}
                <img className='banner-ico banner-ico-1 img-trim' src={'src/images/banner/b1.png'} alt='' />
                <img className='banner-ico banner-ico-2 img-trim' src={'src/images/banner/b2.png'} alt='' />
                <img className='banner-ico banner-ico-3 img-trim' src={'src/images/banner/b3.png'} alt='' />
                <img className='banner-ico banner-ico-4 img-trim' src={'src/images/banner/b4.png'} alt='' />
                <img className='banner-ico banner-ico-5 img-trim' src={'src/images/banner/b5.png'} alt='' />
              </div>
            </div>

            {/* Right column for description */}
            <div className='col-md-5 wow fadeInUp' data-wow-duration='3s'>
              {/* Subtitle text with white color */}
              <h2 className='column-title' style={{ color:'#FFFFFF' }}>
                Streamline Your Document Editing with NextJot
              </h2>
              {/* Additional introductory content about NextJot corrections and additions would be made to this */}
              <div className='intro-top-content'>
                <p>
                  NextJot is a powerful document editing platform that simplifies your workflow.
                  Say goodbye to scattered notes and outdated file versions. With NextJot, you can create, edit all from an intuitive, sleek interface. Whether you're working solo or in a team, your documents are always
                  organized and accessible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
