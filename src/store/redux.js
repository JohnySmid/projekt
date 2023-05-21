import { configureStore } from '@reduxjs/toolkit';
import EventsSlicer from '../reducers/EventsSlicer';

// Configures the Redux store with reducers
export const Store = configureStore({
    reducer: {
        events: EventsSlicer,
    }
})