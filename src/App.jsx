import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import { DocEdit } from "./components/DocEdit.jsx";
import LandingPage from './components/LandingPage';


import './App.css'
import { ErrorPage } from './components/ErrorPage.jsx'
import OAuth2RedirectHandler from "./components/OAuth2RedirectHandler.jsx";
import OAuth2Login from "./components/Login.jsx";


/**
 * Entry point of the application
 * @returns {JSX.Element}
 *
 * Note: For now, we will use static document, any code commented out will be used with the api,
 * since we don't have that for now, please  leave it commented for testing purposes.
 *
 * FIX: Documents should only be fetched for the logged-in user not all user
 */
function App() {

    return (
    <>
        <Router>
            <Routes>
                <Route path={'/'} element={<LandingPage />} />
                <Route path={'/dashboard'} element={<Dashboard />} />
                <Route path={'/document/:id'} element={<DocEdit />} />
                <Route path={'/error_page'} element={<ErrorPage />} />
                <Route path={'/login'} element={<OAuth2Login />} />
                <Route path={'/oauth2/redirect'} element={<OAuth2RedirectHandler />} />
            </Routes>
        </Router>
    </>
  );
}

export default App
