import React, { useState } from 'react';
import './index.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [documents, setDocuments] = useState([
    { title: 'Document Title 1' },
    { title: 'Document Title 2' },
    { title: 'Document Title 3' },
    { title: 'Document Title 4' },

    
  ]);

  const handleSearch = () => {
    const filteredDocs = documents.filter(doc => 
      doc.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setDocuments(filteredDocs);
  };

  return (
    <div className="App">
      <div className="navbar">
        <button className="menu-btn">☰</button>
        <h1>Docs</h1>
        <input 
          type="text" 
          value={searchQuery} 
          onChange={e => setSearchQuery(e.target.value)} 
          placeholder="Search"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="docs-container">
        {documents.map((doc, index) => (
          <div className="doc-card" key={index}>{doc.title}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
