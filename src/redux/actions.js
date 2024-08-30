
// creates an object that stores the documents and the set document action
export const setDocuments = (documents) => ({
    type: 'documents/addDocuments',
    payload: documents
});

