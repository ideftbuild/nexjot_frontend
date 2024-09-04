import { Filter } from './Filter.jsx';
import { DashboardHeader } from './DashboardHeader.jsx';
import { DocsPreview } from './DocsPreview.jsx'
// import { useDispatch } from "react-redux";
// import { useEffect } from "react";
// import { addDocuments } from "../redux/reducer.js";
// import { getDocuments } from "../services/document-service.js";

/**
 *  The Dashboard page
 *
 * Note: For now, we will use static document, any code commented out will be used with the api,
 * since we don't have that for now, please  leave it commented for testing purposes.
 */
export const Dashboard = () => {
    // const dispatch = useDispatch();

    // Fetch documents on app load
    // useEffect(() => {
    //     async function fetchDocuments() {
    //         dispatch(addDocuments(addDocuments(await getDocuments())));
    //     }
    //     fetchDocuments().then(() => null);
    // }, [dispatch]);

    return (
        <>
            <DashboardHeader/>
            <main>
                <Filter/>
                <DocsPreview/>
            </main>
        </>
    );
}