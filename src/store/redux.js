import { configureStore } from '@reduxjs/toolkit';
import EventsSlicer from '../reducers/EventsSlicer';
import EventSlice from '../reducers/EventSlice';

/**
 * Redux store configuration.
 * @constant {Object}
 * @param {Object} reducer - The combined reducer object.
 *   @property {Function} events - The reducer function for the 'events' slice of state.
 *   @property {Function} event - The reducer function for the 'event' slice of state.
 * @returns {Object} The configured Redux store.
 */

export const Store = configureStore({
    reducer: {
        events: EventsSlicer,
        event: EventSlice,
    }
})