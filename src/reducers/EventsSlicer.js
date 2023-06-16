import { createSlice, current } from "@reduxjs/toolkit";

// A Redux slice for managing the state of the projects
export const EventsSlicer = createSlice({
    name: "events",
    initialState: [],
    reducers: {
        // A reducer that adds a new project to the projects state array
    loadData: (state, action) => {
        const events = action.payload
        state = [...state, ...events]
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
        // console.log('newPresences:',newPresences)
        // console.log('event.presences:', event.presences)
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

// Export the addProject action creator from the projectsSlice
export const { loadData, addData, updateData, addPresence} = EventsSlicer.actions

// Export the projectsSlice reducer
export default EventsSlicer.reducer