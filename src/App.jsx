import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import {Dashboard} from "./components/Dashboard";
import {ErrorPage} from './components/ErrorPage.jsx'
import {AuthProvider} from "./contexts/AuthContext.jsx";
import ProtectedRoute from "./components/auth/ProtectedRoute.jsx";
import OAuth2Login from './components/Login.jsx';
import LandingPage from './components/LandingPage';
import  DocEdit from "./components/DocEdit.jsx";
import './App.css'

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
            <AuthProvider>
                <Routes>
                    <Route path={'/'} element={<LandingPage />} />
                    <Route path={'/login'} element={<OAuth2Login />} />
                    <Route element={<ProtectedRoute />} >  {/* ensure only authenticated user access this route */}
                        <Route path={'/dashboard'} element={<Dashboard />} />
                        <Route path={'/documents/:id'} element={<DocEdit />} />
                        <Route path={'/error_page'} element={<ErrorPage />} />
                    </Route>
                    <Route path={'*'} element={<Navigate to={'/login'} replace/>}/>  {/* redirect to login page if route does not exist */}
                </Routes>
            </AuthProvider>
        </Router>
    </>
  );
}

export default App
