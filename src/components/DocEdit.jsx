import {useParams} from "react-router-dom";
import '../styles/document-edit.css'
import React, {useEffect, useState} from "react";
import {handleChangeOnContent} from '../listeners/document-listeners.js';
import {DocEditHeader} from "./DocEditHeader.jsx";
import {useSelector} from 'react-redux';
import {selectDocumentById} from '../redux/selectors.js';
import {getDocument, saveDocument} from "../services/document-service.js";


/**
 * The editing page for a document
 *
 * This component handles the document editing logic, saving changes,
 * and user feedback during the process.
 *
 * Note:
 * FEAT: Use color red for error message and green for success
 * FIX: Display an error message when user enters a title less than 10
 */
const DocEdit = () => {
    const id = useParams().id;  // Get document ID from the URL
    const [content, setContent] = useState(''); // Document content state
    const [title, setTitle] = useState('');     // Document title state
    const [isTyping, setIsTyping] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false); // State to track saving status
    const [saveMessage, setSaveMessage] = useState(''); // Feedback message for user
    const [document, setDocument] = useState(null);
    const NODE_ENV = import.meta.env.VITE_NODE_ENV;
    const doc = useSelector(state => NODE_ENV === 'development' ? selectDocumentById(state, id) : null);

    // load the document
    useEffect(() => {
        if (NODE_ENV === 'development') {
            setDocument(doc);
            setIsLoading(false);
        } else {
            // load document
            const loadDocument = async () => {
                setDocument(await getDocument(id));
                setIsLoading(false);
            }
            loadDocument().then();
        }
    }, [id, NODE_ENV, doc]);


    // set initial title and content
    useEffect(() => {
        if (document) {
            setContent(document.content);
            setTitle(document.title);
        }
    }, [document]);


    if (isLoading) {
        return <div>Loading...</div>
    }
    // if document not found
    if (!document) {
        console.log(`Document with id ${id} not found`);
        return <p>Document Not Found</p>;
    }

    const saveContent = async () => {
        setIsSaving(true);
        const saveDoc = await saveDocument(id, {'content': content});
        if (NODE_ENV === 'development') {
            saveDoc.title = title;
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
        <div className={'doc-edit-wrapper'}>
            <DocEditHeader
                id={id}
                title={title}
                setTitle={setTitle}
                setSaveMessage={setSaveMessage}
                setDocument={setDocument}
                setIsSaving={setIsSaving}/>
            <main className={'edit-box'}>
                <textarea onBlur={saveContent}
                    className={`text-box ${isTyping ? 'text-box-active' : ''}`}
                    value={content}
                    onChange={handleChangeOnContent(setContent, setIsTyping)}
                />
                {isSaving && saveMessage && <p>{saveMessage}</p>}
            </main>
        </div>
    );
};

export default React.memo(DocEdit);
