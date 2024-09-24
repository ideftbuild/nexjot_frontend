import { useState } from 'react';  // Importing useState hook from React to manage local state
import '../styles/filter.css';  // Importing the Filter component styles

export function Filter({ onSearch }) {  // Defining the Filter component, accepting onSearch as a prop
    const [searchTerm, setSearchTerm] = useState('');  // Initializes state for the search term

    // Handles the input change
    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);  // Updates the state with the current input value
        onSearch(value);  // Triggers the parent function to filter documents with the updated value
    };

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
            {/* <button onClick={() => onSearch(searchTerm)}>Search</button> */}
        </section>
    );
}
