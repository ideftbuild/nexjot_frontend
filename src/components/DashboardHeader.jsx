import '../styles/header.css'
import { FaBars } from 'react-icons/fa';

export const DashboardHeader = () => {
    return (
        <header>
            <button><FaBars className={"fa-bars"}/></button>
            <h1>NexJot</h1>
        </header>
    )
}