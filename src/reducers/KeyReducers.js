import { v1 as uuid1 } from 'uuid';

/**
 * Stavova funkce nad dict, pridava prvek
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
export const CreateItem = (state, action) => {
    const item = action.payload;
    const id = item['id'] || uuid1()
    if (!item['id']) {
        item['id'] = id
    }
    
    state[id] = item
    return state
}

/**
 * Stavova funkce nad dict, maze prvek
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
export const DeleteItem = (state, action) => {
    const item = action.payload;
    delete state[item.id]

    return state
}

/**
 * Stavova funkce nad dict, dela replace
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
export const ReplaceItem = (state, action) => {
    const newItem = action.payload;
    state[newItem.id] = newItem

    return state
}

/**
 * Stavova funkce nad dict, dela update
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
export const UpdateItem = (state, action) => {
    const newItem = action.payload;
    const oldItem = state[newItem.id]
    state[newItem.id] = {...oldItem, ...newItem}
    
    return state
}    

/**
 * Stavova funkce nad dict, pracude s klicem selectedId
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
export const SelectItem = (state, action) => {
    const item = action.payload
    state.selectedId = item.id

    return state
}