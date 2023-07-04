import { createSlice, current } from "@reduxjs/toolkit";

/**
 * Redux slice for managing the state of events.
 * @constant {Object}
 * @param {string} name - The name of the slice.
 * @param {Array} initialState - The initial state of the slice, an array of events.
 * @param {Object} reducers - An object containing reducer functions.
 *   @property {Function} loadData - A reducer that loads events data into the state, avoiding duplicates.
 *   @property {Function} addData - A reducer that adds a new data to the state.
 *   @property {Function} updateData - A reducer that updates an existing data/presence in event state.
 *   @property {Function} addPresence - A reducer that adds a presence to an event in the state.
 * @returns {Object} The created Redux slice.
 */

export const EventsSlicer = createSlice({
    name: "events",
    initialState: [],
    reducers: {
    loadData: (state, action) => {
        const events = action.payload
        let newEvents = []
        let checkForDuplicates = false

        for (let event of events) {
            for( let eventInState of state){
                if(event.id === eventInState.id) {
                    checkForDuplicates=true
                }
            }

            if(!checkForDuplicates) {
                newEvents.push(event)
            }
        }

        state = [...state, ...newEvents]
        return state
       } , 

    addData: (state, action) => {
        const newData = action.payload
        state.push(newData)
        return state
       }, 
    
    updateData: (state, action) => {
        const updateData = action.payload
        const event =  current(state).find(event => event.id === updateData.event.id)
        const newPresences = event.presences.map(presence => presence.id === updateData.id ? {...presence, ...updateData} : presence)
        const newEvent =  { ...event, presences: newPresences }
        state = current(state).map(event => event.id === newEvent.id ? newEvent  : event)
        return state
        },

    addPresence: (state, action) => {
        const updateData = action.payload
        const event =  current(state).find(event => event.id === updateData.event.id)
        const newEvent =  { ...event, presences: updateData.event.presences }
        state = current(state).map(event => event.id === newEvent.id ? newEvent  : event)
        return state
        },
    },
})

// Export the loadData, addData, updateData action from the EventsSlicer
export const { loadData, addData, updateData, addPresence} = EventsSlicer.actions

// Export the EventsSlicer reducer
export default EventsSlicer.reducer