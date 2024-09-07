import '../styles/header.css'
import {DropdownMenu} from './DropdownMenu';

/**
 * Header component for the dashboard
 * Contains the title and the dropdown menu
 *
 * @returns {Element} the header of the dashboard
 */
export const DashboardHeader = () => {
    return (
        <header className="header-container">
            <h1 className="header-title">NexJot</h1>
            <DropdownMenu />
        </header>
    );
}

export default DashboardHeader;
