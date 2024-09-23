import '../styles/header.css'
import {DropdownMenu} from './DropdownMenu';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

/**
 * Header component for the dashboard
 * Contains the title and the dropdown menu
 *
 * @returns {Element} the header of the dashboard
 */
export const DashboardHeader = () => {
    return (
        <header className="header-container">
             {/* <button><FaBars className={"fa-bars"}/></button> */}
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              {/* Link to the homepage so when the NexJot is clicked it takes the user back to the homepage */}
              <h1 className="header-title">NexJot</h1>
            </Link>
            <DropdownMenu />
        </header>
    );
}

export default DashboardHeader;
