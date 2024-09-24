import { getDocumentsPreview } from './document-service.js';
import {addDocuments} from '../redux/reducer.js';


export const initializeApp = async (dispatch, useStaticData=false) => {
    const data = await getDocumentsPreview(useStaticData)
    dispatch(addDocuments(data))
    return data;
}
