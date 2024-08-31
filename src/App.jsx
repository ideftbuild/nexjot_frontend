import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import './App.css';
import { Header } from "./components/Header";


function App() {

  return (
    <>
        <Router>
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </Router>
    </>
  );
};

export default App
