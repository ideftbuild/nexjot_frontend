import '../styles/header.css'
import { FaBars } from 'react-icons/fa';
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
            <button><FaBars className={"fa-bars"}/></button>
            <input maxLength={60} id={'title'} value={title}
                   onChange={handleChangeOnTitle(setTitle)}>
            </input>
            <h1>NexJot</h1>
        </header>
    )
}
