import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import { DocEdit } from "./components/DocEdit.jsx";
import './App.css'
// import {useDispatch} from "react-redux";
// import {useEffect} from "react";
// import {addDocuments} from "./redux/reducer.js";
// import {getDocuments} from "./services/document-service.js";
import { ErrorPage } from './components/ErrorPage.jsx'


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
    // const dispatch = useDispatch();
    // Fetch documents on app load
    // FIX: useEffect shouldn't be used here since not all user who access here has an account
    // useEffect(() => {
    //     async function fetchDocuments() {
    //         dispatch(addDocuments(addDocuments(await getDocuments())));
    //     }
    //     fetchDocuments().then(() => null);
    // }, [dispatch]);

    return (
    <>
        <Router>
            <Routes>
                <Route path={'/dashboard'} element={<Dashboard />} />
                <Route path={'/document/:id'} element={<DocEdit />} />
                <Route path={'/error_page'} element={<ErrorPage />} />
            </Routes>
        </Router>
    </>
  );
}

export default App;
