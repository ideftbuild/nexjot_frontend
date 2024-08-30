import { fetchDocuments } from '../services/fetchDocuments.js';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import { addDocuments } from '../redux/reducer.js';
import '../styles/dashboard.css'
import {useNavigate} from "react-router-dom";


export const Document = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(addDocuments(addDocuments(fetchDocuments())));
    }, [dispatch]);

    const documents = useSelector(state => state.documents.documents.payload)
    const navigate = useNavigate();

    function openDocumentForEdit (document) {
        navigate(`/document/${document.id}`);
    }

    console.log("documents => ", documents);
    if (!documents || !Array.isArray(documents)) {
        return <p>No documents available</p>;
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
                {/*<RenderDocuments documents={documents}/>*/}
            </div>
        </section>
    )
}