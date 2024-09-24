import '../styles/dashboard.css'
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { documentService } from '../services/document-service.js';


/**
 * Preview all users documents
  * @param {string} searchTerm - Search query to filter documents either by title or content
 * @returns {JSX.Element}
 */
export const DocsPreview = ({searchTerm}) => {
    const documents = documentService();
    // const documents = useSelector(state => state.documents.documents);
    const navigate = useNavigate();

    // navigate to the document where the user clicked
    function openDocumentForEdit (document) {
        navigate(`/documents/${document.id}`);
    }
    
    // Filters the documents based on search term (which is either search by title or content)
    let filteredDocuments = documents;
//IF searchTerm is not an empty string or searchTerm is not equal to null
//THEN filteredDocuments is assigned the value of documents filtered by the search term
    filteredDocuments = documents.filter((doc) => 
        doc.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        doc.content.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // if the user has no document from the search term
    if (!filteredDocuments || filteredDocuments.length === 0) {
        return <p>Document Not Found</p>
    }

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