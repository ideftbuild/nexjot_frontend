import {useParams} from "react-router-dom";
import '../styles/document-edit.css'
import React, {useEffect, useState} from "react";
import {handleChangeOnContent} from '../listeners/document-listeners.js';
import {DocEditHeader} from "./DocEditHeader.jsx";
import {useSelector} from 'react-redux';
import {selectDocumentById} from '../redux/selectors.js';


/**
 *  The editing page for a document
 *
 * Note: For now, we will use static document, any code commented out will be used with the api,
 * since we don't have that for now, please  leave it commented for testing purposes.
 */
const DocEdit = () => {
    const id = useParams().id;  // get document id from the URL
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    // const document = useSelector(state => selectDocumentById(state, id));   this will be used with the api
    const documents = documentService();  // static documents
    const document = documents.find(document => document.id === String(id));  // static document
    // set initial title and content
    useEffect(() => {
        if (document) {
            setContent(document.content);
            setTitle(document.title);
        }
        setIsLoading(false);
    }, [document]);

    if (isLoading) {
        return <div>Loading...</div>
    }
    // if document not found
    if (!document) {
        console.log(`Document with id ${id} not found`);
        return <p>Document Not Found</p>;
    }
    return (
        <div className={'doc-edit-wrapper'}>
            <DocEditHeader title={title} setTitle={setTitle} />
            <main className={'edit-box'}>
                <textarea className={`text-box ${isTyping ? 'text-box-active' : ''}`} value={content}
                          onChange={handleChangeOnContent(setContent, setIsTyping)}>
                </textarea>
            </main>
        </div>
    );
}

export default React.memo(DocEdit);
