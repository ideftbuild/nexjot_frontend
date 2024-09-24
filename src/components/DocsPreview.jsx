import '../styles/dashboard.css'
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

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
    const documents = useSelector(state => state.documents.documents);
    const navigate = useNavigate();

    // navigate to the document where the user clicked
    function openDocumentForEdit(document) {
        navigate(`/documents/${document.id}`);
    }

    // Filters the documents based on search term (which is either search by title or content)
    let filteredDocuments = documents;
    // Checks if the searchTerm is not an empty string or null
    if (searchTerm !== '' && searchTerm !== null) {
        filteredDocuments = documents.filter((doc) =>
            doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            doc.content.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }
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