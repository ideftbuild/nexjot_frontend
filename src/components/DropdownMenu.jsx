import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/DropdownMenu.css';

/**
 * DropdownMenu component to handle navigation and other actions.
 * Contains options for creating a new document, 
 */
const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  /**
   * Toggles the dropdown menu visibility.
   */
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  /**
   * Handles the navigation to the new document page.
   * Redirects the user to the specifie path. 
   */
  const handleCreateNewDocument = () => {
    navigate('/new'); // Navigate to new document page
  };


  return (
    <div className="dropdown-container">
      <div className="dropdown-button" onClick={toggleDropdown}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {isOpen && (
        <div className="dropdown-content">
          <button onClick={handleCreateNewDocument}>New Document</button>
          <button onClick={() => navigate('/dashboard')}>Dashboard</button>
          <button onClick={() => navigate('/accounts')}>Login</button>
          <button onClick={() => navigate('/login')}>Settings</button>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
