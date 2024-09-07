import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/DropdownMenu.css';
import { FaBars } from 'react-icons/fa';

/**
 * DropdownMenu component to handle navigation and other actions.
 *
 * - The dropdown menu is toggled by clicking the `FaBars` icon.
 * - Each button in the dropdown menu navigates to a specific route.
 *
 * @component
 * @returns {JSX.Element}
 */
export const DropdownMenu = () => {
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
      <div className="dropdown-button"
        onClick={toggleDropdown}
        role="button"
        aria-label={isOpen ? "Close menu" : "Open menu"} /* Aria label for accessibility */
        aria-expanded={isOpen}>
        {/* The FaBars icon is used as the dropdown button. */}
         <FaBars size={34} />
      </div>
      {isOpen && (
        <div className="dropdown-content">
          role="menu"
          aria-label="Dropdown options"
          <button onClick={handleCreateNewDocument} role="menuitem">New Document</button>
          <button onClick={() => navigate('/user-dashboard')} role="menuitem">Dashboard</button>
          <button onClick={() => navigate('/user-profile')} role="menuitem">Profile</button>
          <button onClick={() => navigate('/login')} role="menuitem">Logout</button>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
