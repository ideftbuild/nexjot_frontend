import React, { useState, useRef, useEffect } from 'react';
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
  const dropdownRef = useRef(null); // Reference to the dropdown element

  /**
   * Toggles the dropdown menu visibility.
   */
  const toggleDropdown = (e) => {
    e.stopPropagation(); // Prevent the event from bubbling
    console.log("Dropdown toggled");
    setIsOpen(!isOpen);
  };

  /**
   * Handles the click event outside the dropdown menu.
   */
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
    console.log("Clicked outside the dropdown");
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []); // eslint-disable-line

  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  // /**
  //  * Handles the navigation to the new document page.
  //  * Redirects the user to the specifie path.
  //  */
  // const handleCreateNewDocument = () => {
  //   navigate('/new'); // Navigate to new document page
  // };


  return (
    <div className="dropdown-container" ref={dropdownRef}>
      <button
        className="dropdown-button"
        onClick={toggleDropdown}
        aria-haspopup="true"
        aria-expanded={isOpen}
        >
         <FaBars size={30} />
      </button>
      {isOpen && (
        <div className="dropdown-content" role="menu">
          <button onClick={() => handleNavigation('/new')} role="menuitem">New Document</button>
          <button onClick={() => handleNavigation('/dashboard')} role="menuitem">Dashboard</button>
          <button onClick={() => handleNavigation('/login')} role="menuitem">Logout</button>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;

