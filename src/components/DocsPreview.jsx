import '../styles/dashboard.css'
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


/**
 * Preview all users documents
 *
 * @returns {JSX.Element}
 */
export const DocsPreview = () => {

    const documents = useSelector(state => state.documents.documents);
    const navigate = useNavigate();

    // navigate to the document where the user clicked
    function openDocumentForEdit (document) {
        navigate(`/documents/${document.id}`);
    }
    // user has no document
    if (!documents || !Array.isArray(documents)) {
        return <p>Document Not Found</p>
    }

    return (
        <section>
            <div className={"documents"}>
                {documents.map((doc) => (
                    <div className={'document'} key={doc.id} onClick={() => openDocumentForEdit(doc)}>
                        <div className={'title-wrapper'}><h3 className={"title"}>{doc.title}</h3></div>
                        <div className={'content'}>{doc.content}</div>
                    </div>
                ))}
            </div>
        </section>
    )
}