import React, { useState } from 'react'; // Imports React and the useState hook

// Functional component for the header section
const Header = () => {
  // State to manage whether the dropdown is open or closed
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle the dropdown's open/close state
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle the state between true and false
  };

  return (
    // Header section with static positioning and background color
    <header className="header static-header" style={{ background: '#001f7a' }}>
      <div className="container">
        
        {/* Navigation bar */}
        <nav id="main-nav" className="navigation navigation-landscape">
          
          {/* Header of the navigation */}
          <div className="nav-header">
            <div className="nav-toggle"></div> {/* Toggle button for mobile navigation (not implemented) */}
          </div>

          {/* Navigation menu */}
          <div className="nav-menus-wrapper gl-menu">
            
            {/* Right-side dropdown menu (currently not used) */}
            <ul className="dropdown header-right align-to-right">
              {/* Placeholder for dropdown content */}
            </ul>

            {/* Main navigation links */}
            <ul className="nav-menu align-to-right">
              {/* Anchor links pointing to sections of the page */}
              <li><a href="#about" className="taps">About</a></li>
              <li><a href="#features" className="taps">Features</a></li>
              <li><a href="/Dashboard" className="taps">Dashboard</a></li>
              {/* Commented out login and sign-up links, could be re-enabled when needed if need arises */}
              {/* <li><a href="login.html">Login</a></li> */}
              {/* <li><a id="border-lined" href="signup.html">Sign Up</a></li> */}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
