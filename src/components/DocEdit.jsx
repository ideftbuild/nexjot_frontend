import { useParams } from "react-router-dom";
import '../styles/document-edit.css';
import React, { useEffect, useState } from "react";
import { handleChangeOnContent } from '../listeners/document-listeners.js';
import { DocEditHeader } from "./DocEditHeader.jsx";
import { documentService } from "../services/document-service.js"; // Mock data for now
import { useSelector } from 'react-redux'; // for redux implementation
import { selectDocumentById } from '../redux/selectors.js';

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
    const [isSaving, setIsSaving] = useState(false); // State to track saving status
    const [saveMessage, setSaveMessage] = useState(''); // Feedback message for user

    // This following line to use Redux-based document fetching in the future
    // const document = useSelector(state => selectDocumentById(state, id));

    const documents = documentService();  // Static documents
    const document = documents.find(document => document.id === String(id)); // Find the document by ID

    // Set initial title and content
    useEffect(() => {
        if (document) {
            setContent(document.content);
            setTitle(document.title);
        }
    }, [document]);

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
        return new Promise((resolve) => {
            setTimeout(() => resolve('success'), 1000); // Simulates a 1s delay
        });
    };

    if (!document) {
        return <p>Document Not Found</p>; // If document not found, return message
    }

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
