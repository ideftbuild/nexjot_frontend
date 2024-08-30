import { Filter } from './Filter.jsx';
import { Header } from './Header.jsx';
import { Document } from './Document.jsx'

export const Dashboard = () => {
    return (
        <>
            <Header/>
            <main>
                <Filter/>
                <Document/>
            </main>
        </>
    );
}