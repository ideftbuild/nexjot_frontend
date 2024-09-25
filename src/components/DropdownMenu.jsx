import { useState, useRef, useEffect } from 'react';
import '../styles/DropdownMenu.css'
import { FaBars } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import {useAuth} from "../contexts/AuthContext.jsx";

/**
 * DropdownMenu component to handle navigation and other actions.
 *
 * @returns {JSX.Element}
 * @constructor
 */
const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();
    const { logout } = useAuth();

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event) => {
        console.log("is modal open => ", isModalOpen);
        if (dropdownRef.current && !dropdownRef.current.contains(event.target) && !isModalOpen) {
            console.log("changing isOpen to false for event target => ", event.target);
            setIsOpen(false);
        }
    };

    const handleCloseModal = () => {
        setIsOpen(false);
        setIsModalOpen(false);
    }


    const handleLogout = () => {
        logout();
        handleNavigation('/login');
    }


    useEffect(() => {
        if (isOpen || isModalOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('keydown', handleKeyDown);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleKeyDown);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, isModalOpen]);

    const handleNavigation = (path) => {
        navigate(path)
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            handleCloseModal();
        }
    }

    return (
        <div className="dropdown-wrapper">
            <button
                className="dropdown-btn"
                type="button"
                onClick={toggleDropdown}
                aria-haspopup="true"
                aria-expanded={isOpen}
            >
                <FaBars className="mr-2" />
            </button>

            {isOpen && (
                <div className="dropdown-menu-bar" ref={dropdownRef}>
                    <hr className={'dropdown-items'}/>
                    <button className="dropdown-items" onClick={handleLogout}>
                        Logout
                    </button>
               </div>
            )}

        </div>
    );
};

export default DropdownMenu;