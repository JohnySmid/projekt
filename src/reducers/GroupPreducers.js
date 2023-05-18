import { createSlice } from '@reduxjs/toolkit'

import { CreateItem, DeleteItem, ReplaceItem, UpdateItem, SelectItem } from './keyedreducers';

/**
 * stavova funkce, ktera odebere uzivatele ze skupiny 
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
const GroupMemberRemove = (state, action) => {
    console.log('volani stavove funkce, smazat uzivatele')
    const g = action.payload.group
    const u = action.payload.user
    console.log(u)
    const group = state[g.id]
    group.memberships = group.memberships.filter(m => m.user.id !== u.id)
    return state
}

/**
 * Stavova funkce, ktera provede update uzivatele ve skupine
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
const GroupMemberUpdate = (state, action) => {
    const g = action.payload.group
    const u = action.payload.user
    const group = state[g.id]
    group.memberships = group.memberships.map(user => user.id === u.id ? {...user, ...u} : user)
    return state
}


/**
 * Kompletni rez budocim store.
 * Obsluhuje skupiny
 */
export const GroupSlice = createSlice({
    name: 'groups',
    initialState: {},
    reducers: {
        group_add: CreateItem,
        group_delete: DeleteItem,
        group_replace: ReplaceItem,
        group_update: UpdateItem,
        group_select: SelectItem,

        group_memberRemove: GroupMemberRemove,
        group_memberUpdate: GroupMemberUpdate
    }
})

//z rezu odvozene akce
export const GroupActions = GroupSlice.actions
//z rezu odvozeny stavovy automat
export const GroupReducer = GroupSlice.reducer