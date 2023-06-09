import { createSlice } from "@reduxjs/toolkit";

// A Redux slice for managing the state of the projects
export const PresenceSlicer = createSlice({
    name: "presence",
    initialState: [],
    reducers: {
        // A reducer that adds a new project to the projects state array
    loadData: (state, action) => {
        const presence = action.payload
        state = [...state, ...presence]
        return state
       } , 

    addData: (state, action) => {
        const newPresence = action.payload
        state.push(newPresence)
        return state
       }, 
    
    updateData: (state, action) => {
        const updatePresence = action.payload
        state = state.map(data => data.id === updatePresence.id ? {...data, ...updatePresence} : data)
        return state
        },
    },
})

// Export the addProject action creator from the projectsSlice
export const { loadData, addData, updateData } = PresenceSlicer.actions

// Export the projectsSlice reducer
export default PresenceSlicer.reducer