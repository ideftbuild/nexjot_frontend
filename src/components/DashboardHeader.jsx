import '../styles/header.css'
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export const DashboardHeader = () => {
    return (
        <header>
            {/* <button><FaBars className={"fa-bars"}/></button> */}
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              {/* Link to the homepage so when the NexJot is clicked it takes the user back to the homepage */}
        <h1>NexJot</h1>
      </Link>        
      </header>
    )
}