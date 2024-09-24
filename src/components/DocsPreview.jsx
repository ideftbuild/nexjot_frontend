import '../styles/dashboard.css'
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {initializeApp} from "../services/app-initializer.js";

/**
 * Preview all users documents
  * @param {string} searchTerm - Search query to filter documents either by title or content
 * @returns {JSX.Element}
 */
/**
 * DocsPreview component filters and displays documents based on a search term.
 * 
 * @param {Object} props - The component props.
 * @param {string} props.searchTerm - The term used to filter documents by title or content.
 * 
 * @returns {JSX.Element} A section containing filtered documents or a message if no documents are found.
 */
export const DocsPreview = ({ searchTerm }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const [documents, setDocuments] = useState(null);

    // load all documents as preview
    useEffect( () => {
        const setup =  async () => {
            const NODE_ENV = import.meta.env.VITE_NODE_ENV;
            // By default, it uses the static data. To switch to dynamic set `VITE_NODE_ENV` to `production`
            setDocuments(await initializeApp(dispatch, NODE_ENV === 'development'));
        }
        setup().then(() => setIsLoading(false));
    }, []);

    // navigate to the document where the user clicked
    function openDocumentForEdit(document) {
        navigate(`/documents/${document.id}`);
    }
    // page is still loading
    if (isLoading && documents == null) {
        return <div>Loading...</div>
    }

    // Filters the documents based on search term (which is either search by title or content)
    const filterDocuments = (documents, searchTerm) => {
        if (!searchTerm) {
            return documents;
        }
        const lowercasedSearchTerm = searchTerm.toLowerCase();

        return documents.filter(doc =>
            doc.title.toLowerCase().includes(lowercasedSearchTerm) ||
            doc.content.toLowerCase().includes(lowercasedSearchTerm)
        );
    };
    const filteredDocuments = filterDocuments(documents, searchTerm);

    return (
        <section>
            <div className={"documents"}>
                {filteredDocuments.map((doc) => (
                    <div className={'document'} key={doc.id} onClick={() => openDocumentForEdit(doc)}>
                        <div className={'title-wrapper'}><h3 className={"title"}>{doc.title}</h3></div>
                        <div className={'content'}>{doc.content}</div>
                    </div>
                ))}
            </div>
        </section>
    )
}