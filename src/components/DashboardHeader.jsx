import '../styles/header.css'
import DropdownMenu from './DropdownMenu';

export const DashboardHeader = () => {
    return (
        <header className="header-container">
            <h1 className="header-title">NexJot</h1>
            <DropdownMenu />
        </header>
    );
}

export default Header;
