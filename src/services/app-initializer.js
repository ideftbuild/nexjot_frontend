import { getDocumentsPreview } from './document-service.js';
import {addDocuments} from '../redux/reducer.js';


export const initializeApp = (dispatch, useStaticData=false) => {
    getDocumentsPreview(useStaticData).then((data) => {
        dispatch(addDocuments(data))
    });
}
