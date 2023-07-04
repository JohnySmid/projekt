import { createSlice } from "@reduxjs/toolkit";

/**
 * Redux slice for managing the state of the events.
 * @constant {Object}
 * @param {string} name - The name of the slice.
 * @param {*} initialState - The initial state of the slice.
 * @param {Object} reducers - An object containing reducer functions.
 *   @property {Function} changeEvent - A reducer that updates the event state.
 * @returns {Object} The created Redux slice.
 */

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

// Export the changeEvent action from the EventSlice
export const { changeEvent } = EventSlice.actions

// Export the EventSlicer reducer
export default EventSlice.reducer