import { configureStore } from '@reduxjs/toolkit';
import EventsSlicer from '../reducers/EventsSlicer';
import EventSlice from '../reducers/EventSlice';

// Configures the Redux store with reducers
export const Store = configureStore({
    reducer: {
        events: EventsSlicer,
        event: EventSlice,
    }
})