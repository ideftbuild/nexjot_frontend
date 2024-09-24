import '../styles/header.css'
import { Link } from 'react-router-dom';
import {handleChangeOnTitle} from "../listeners/document-listeners.js";
import React from "react";
import {saveDocument} from "../services/document-service.js";

/**
 *
 * @param id document id
 * @param title  title of the document
 * @param setTitle set the title of the document
 * @param setSaveMessage set a message to display when saving the document
 * @param setDocument add document
 * @param setIsSaving set the status when saving document
 * @returns {Element} the header of the document editor
 * @constructor
 */
export const DocEditHeader = ({ id, title, setTitle, setSaveMessage, setDocument, setIsSaving} ) => {

    const saveTitle = async () => {
        const NODE_ENV = import.meta.env.VITE_NODE_ENV;
        setIsSaving(true);

        const saveDoc = await saveDocument(id, {'title': title});
        if (NODE_ENV === 'development') {
            saveDoc.content = 'predefined content';
        }
        if (saveDoc) {
            setSaveMessage('Document successfully saved!');
            setDocument(saveDoc);
        } else {
            setSaveMessage('Failed to save document.');
        }
        window.setTimeout(() => setIsSaving(false), 1000);
    }

    return (
        <header>
            <input minLength={9} maxLength={50} id={'title'} value={title}
                   onChange={handleChangeOnTitle(setTitle)}
                    onBlur={saveTitle}>
            </input>
            <Link to='/dashboard' style={{ textDecoration: 'none', color: 'inherit' }}>
              {/* Link to the dashboard so when the logo is clicked it takes the user to the dashboard */}
                <h1>NexJot</h1>
            </Link>
      </header>
    )
}
