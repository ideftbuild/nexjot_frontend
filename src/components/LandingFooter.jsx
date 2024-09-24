import React from 'react';

// An array holding team members' data including image, name, and social media links.
const teamMembers = [
  {
    id: 1, // Unique identifier for each team member
    imgSrc: 'src/images/team/akan.png', // Image source for the team member's photo
    name: 'Akaniyene Effiong', // Name of the team member
    linkedin: 'https://www.linkedin.com/in/akan-swe/', // LinkedIn profile link
    twitter: 'https://x.com/Hes_akan/', // Twitter profile link
    github: 'https://github.com/ideftbuild/', // GitHub profile link
    duration: '1.5s' // Duration for the animation effect
  },
  {
    id: 2,
    imgSrc: 'src/images/team/maimunah.png',
    name: 'Maimunah Elegushi',
    linkedin: 'https://www.linkedin.com/in/memunat-elegushi-6799b0225/',
    twitter: 'https://x.com/DietDefiCodes',
    github: 'https://github.com/Auspicious-1ife/',
    duration: '2s'
  },
  {
    id: 3,
    imgSrc: 'src/images/team/Jo.png',
    name: 'Joseph Omoruwou',
    linkedin: 'https://www.linkedin.com/in/josephomoruwou/',
    twitter: 'https://x.com/uze_z1/',
    github: 'https://github.com/uze-zi/',
    duration: '2.5s'
  },
];

// Functional component to render the footer section of the website.
const Footer = () => {
  return (
    <div className="footer-main-area">
      {/* Footer section for NexJot */}
      <footer className="gl-footer-sec">
        
        {/* About section with project description */}
        <section className="about-tag" id="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div className="section-title-item" style={{ marginTop: '80px', color:'#001f7a'}}>
                  <h2 className="section-title">About NexJot</h2>
                </div>
              </div>
            </div>

            {/* Project overview text */}
            <div className="footer-area" style={{ fontSize: '20px', color:'#FFFFFF' }}>
              <div className="row mb-5">
                <div className="col mb-5">
                  {/* Project description */}
                  NexJot is a dynamic project born from a desire to create something innovative and impactful. <br />
                  Our goal is to leverage and showcase the diverse skills we've acquired while exploring new technologies along the way.
                  At the heart of NexJot is its real-time collaboration feature, designed to enhance user experience by allowing seamless interaction and updates. <br />
                  We are committed to integrating cutting-edge technologies to ensure that NexJot not only meets but exceeds expectations.
                </div>
              </div>

              {/* Team section */}
              <div className="col-lg-8 mx-auto mb-5">
                <div className="section-title-item">
                  <h2 className="section-title">Meet The Team</h2>
                </div>
              </div>

              {/* Display each team member's profile */}
              <div className="row mt-5">
                {teamMembers.map((member) => (
                  <div
                    key={member.id} // Unique key for each team member
                    className={`col-md-4 wow fadeInUp`} // CSS class for styling and animation
                    data-wow-duration={member.duration} // Animation duration controlled by data attribute
                  >
                    <div className="icon-featured-item">
                      {/* Team member's image */}
                      <img src={member.imgSrc} alt={member.name} width="70%" />
                      {/* Team member's name */}
                      <h3 className="feature-title mt-5">{member.name}</h3>
                      {/* List of social media links */}
                      <ul>
                        <li><a target="_blank" rel="noopener noreferrer" href={member.linkedin}>LinkedIn Profile</a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href={member.twitter}>Twitter Profile</a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href={member.github}>GitHub</a></li>
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              {/* Project repository link */}
              <h3 className="feature-title mt-5">
                Project GitHub repository :
                <li> <a target="_blank" rel="noopener noreferrer" href="https://github.com/ideftbuild/nexjot_frontend"> GitHub Repository</a>
                </li>
              </h3>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
