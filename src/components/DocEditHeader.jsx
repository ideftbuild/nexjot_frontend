import '../styles/header.css'
import { Link } from 'react-router-dom';
import {handleChangeOnTitle} from "../listeners/document-listeners.js";
import React from "react";

/**
 *
 * @param title  title of the document
 * @param setTitle set the title of the document
 * @returns {Element} the header of the document editor
 * @constructor
 */
export const DocEditHeader = ({ title, setTitle } ) => {
    return (
        <header>
            <input maxLength={50} id={'title'} value={title}
                   onChange={handleChangeOnTitle(setTitle)}>
            </input>
            <Link to='/dashboard' style={{ textDecoration: 'none', color: 'inherit' }}>
              {/* Link to the dashboard so when the logo is clicked it takes the user to the dashboard */}
                <h1>NexJot</h1>
            </Link>
      </header>
    )
}
