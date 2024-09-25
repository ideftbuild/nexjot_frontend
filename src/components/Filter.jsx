import {useEffect, useState} from 'react';  // Importing useState hook from React to manage local state
import '../styles/filter.css';
import {createDocument} from "../services/document-service.js";
import {useNavigate} from "react-router-dom";  // Importing the Filter component styles

export function Filter({ onSearch }) {  // Defining the Filter component, accepting onSearch as a prop
    const [searchTerm, setSearchTerm] = useState('');  // Initializes state for the search term
    const [ doc, setDocument ] = useState(null);
    const [ isCreated, setIsCreated ] = useState(false);
    const navigate = useNavigate();

    // Handles the input change
    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);  // Updates the state with the current input value
        onSearch(value);  // Triggers the parent function to filter documents with the updated value
    };

    const handleCreateDocument = async () => {
        setDocument(await createDocument());
        setIsCreated(true);
    };

    const handleNavigation = (path) => {
        navigate(path)
    };

    useEffect( () => {
        if (isCreated) {
            handleNavigation(`/documents/${doc.id}`)
        }
    },[isCreated]);

    return (
        <section className="filter">
            <label htmlFor="filter"></label>
            <input
                type="text"
                id="filter"
                name="filter"
                placeholder="Search..."
                value={searchTerm}  // Binds the input value to the searchTerm state
                onChange={handleInputChange}  // Attach event handler for input change
            />
            <button className={'input-btn'} onClick={handleCreateDocument}>Create</button>
            {/* <button onClick={() => onSearch(searchTerm)}>Search</button> */}
        </section>
    );
}
