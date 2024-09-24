import {useParams} from "react-router-dom";
import '../styles/document-edit.css'
import React, {useEffect, useState} from "react";
import {handleChangeOnContent} from '../listeners/document-listeners.js';
import {DocEditHeader} from "./DocEditHeader.jsx";
import {useSelector} from 'react-redux';
import {selectDocumentById} from '../redux/selectors.js';
import {getDocument} from "../services/document-service.js";

/**
 * The editing page for a document
 *
 * This component handles the document editing logic, saving changes,
 * and user feedback during the process.
 *
 * Note:
 * - For now, we will use static documents. Any code related to the API or Redux
 *   is commented out for testing purposes.
 * - Redux implementation is integrated, but can be activated
 *   later when the API is ready.
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

    // This following line to use Redux-based document fetching in the future
    // const document = useSelector(state => selectDocumentById(state, id));

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

    // Save handler to log the updated document (to be connected to backend later)
    const handleSave = async () => {
        const updatedDocument = { id, title, content };
        setIsSaving(true);
        setSaveMessage(''); // Clear previous message

        try {
            // Simulate API save call (can replace with actual API)
            await fakeApiCall(updatedDocument);
            console.log('Document saved successfully:', updatedDocument);
            setSaveMessage('Document saved successfully!'); // Success message
        } catch (error) {
            console.error('Failed to save document:', error);
            setSaveMessage('Failed to save document.'); // Error message
        } finally {
            setIsSaving(false); // Reset saving state
        }
    };

    // Simulate an API call for saving
    const fakeApiCall = (data) => {
        console.log('data => ', data);
        return new Promise((resolve) => {
            setTimeout(() => resolve('success'), 1000); // Simulates a 1s delay
        });
    };

    return (
        <div className={'doc-edit-wrapper'}>
            <DocEditHeader title={title} setTitle={setTitle} />
            <main className={'edit-box'}>
                <textarea
                    className={`text-box ${isTyping ? 'text-box-active' : ''}`}
                    value={content}
                    onChange={handleChangeOnContent(setContent, setIsTyping)}
                />
                {/* Save Button */}
                <button onClick={handleSave} className="save-button" disabled={isSaving}>
                    {isSaving ? 'Saving...' : 'Save'}
                </button>
                {/* Display save message (success or error) */}
                {saveMessage && <p>{saveMessage}</p>}
            </main>
        </div>
    );
};

export default React.memo(DocEdit);
