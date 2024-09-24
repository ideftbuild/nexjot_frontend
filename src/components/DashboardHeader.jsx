import { DropdownMenu } from './DropdownMenu';
import '../styles/header.css'
import '../styles/DropdownMenu.css'
import { Link } from 'react-router-dom';

/**
 * Header component for the dashboard
 * Contains the title and the dropdown menu
 *
 * @returns {Element} the header of the dashboard
 */
export const DashboardHeader = () => {
    return (
        <header className="header-container">
            <DropdownMenu />
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <h1 className="header-title">NexJot</h1>
            </Link>
        </header>
    );
}

export default DashboardHeader;
