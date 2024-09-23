import { createSelector } from '@reduxjs/toolkit';

const getDocuments = state => state.documents.documents;
const getDocumentId = (state, id) => id;

/**
 * Selects a document from the state slice by its ID and caches the result.
 * The computation is only performed if the input arguments change, improving performance.
 *
 * @param
 *  @inputSelectors
 *      getDocuments - returns the current documents state
 *      getDocumentId - returns the id passed
 *  @combiner
 *      documents - all documents
 *      id - id of the document to select
 *
 * @return The document found
 */
export const selectDocumentById = createSelector(
    [getDocuments, getDocumentId],  // get current documents and id
    (documents, id)=> {
        if (!documents) {
            return undefined;
        }
        return documents.find(doc => doc.id === id);
    }
)