import { createSlice } from "@reduxjs/toolkit";

// A Redux slice for managing the state of the projects
export const EventSlice = createSlice({
    name: "event",
    initialState: "",
    reducers: {
        // A reducer that adds a new project to the projects state array
    changeEvent: (state, action) => {
        state = action.payload
        return state
    }

    },
})

// Export the addProject action creator from the projectsSlice
export const { changeEvent } = EventSlice.actions

// Export the projectsSlice reducer
export default EventSlice.reducer