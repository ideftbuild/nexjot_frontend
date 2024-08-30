// store object into redux store

import {createSlice} from "@reduxjs/toolkit";

const documentsSlice = createSlice (
    {
        name: 'documents',
        initialState: { documents: [] },
        reducers: {
            addDocuments(state, action) {
                state.documents = action.payload;
            },
            removeDocuments(state) {
                state.documents = []
            }
        }
    }
)

// predefined actions to create action object all you just have to do is pass the payload
export const { addDocuments, removeDocuments } = documentsSlice.actions;
console.log("addDocuments", addDocuments);
export default documentsSlice.reducer;  // combine reducers into one reducer object