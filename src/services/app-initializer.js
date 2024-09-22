import { getDocumentsPreview } from './document-service.js';
import {useDispatch} from "react-redux";
import {addDocuments} from '../redux/reducer.js';


export const initializeApp = (dispatch, useStaticData=false) => {
    const documentPreview =  getDocumentsPreview(useStaticData).then((data) => {
        dispatch(addDocuments(data))
    });
}
