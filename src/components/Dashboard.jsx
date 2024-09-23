import { Filter } from './Filter.jsx';
import { DashboardHeader } from './DashboardHeader.jsx';
import { DocsPreview } from './DocsPreview.jsx'
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
    return (
        <div className={'dashboard-wrapper'}>
            <DashboardHeader/>
            <main>
                <Filter/>
                <DocsPreview/>
            </main>
        </div>
    );
}
