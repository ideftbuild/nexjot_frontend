import { useState } from 'react';
import { Filter } from './Filter.jsx';
import { DashboardHeader } from './DashboardHeader.jsx';
import { DocsPreview } from './DocsPreview.jsx'

/**
 *  The Dashboard page
 *
 * Note: For now, we will use static document, any code commented out will be used with the api,
 * since we don't have that for now, please  leave it commented for testing purposes.
 */
/**
 * Dashboard component that serves as the main view for the user's dashboard.
 * 
 * @returns {JSX.Element} The rendered dashboard component.
 * 
 * @description
 * The Dashboard component maintains a state for the search term and renders the
 * DashboardHeader, Filter, and DocsPreview components. The search term state is 
 * passed to the Filter component to handle search input and to the DocsPreview 
 * component to filter displayed documents.
 * 
 * @function
 * @name Dashboard
 */
export const Dashboard = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="dashboard-wrapper">
            <DashboardHeader />
            <main>
                <Filter onSearch={setSearchTerm} /> 
                <DocsPreview searchTerm={searchTerm} />
            </main>
        </div>
    );
};