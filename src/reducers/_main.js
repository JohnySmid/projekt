import { GroupActions } from "./GroupPreducers"
import { GroupFetch, GroupFakeFetch, GroupAsyncUpdate } from "./GroupAsyncActions"


/**
 * vytvori actions, ktere pri volani uz vse radne provedou
 * jsou zahrnuty i "asynchronni" akce
 * @param {*} dispatch 
 * @returns 
 */
export const bindGroupActions = (dispatch) => {
    return {
        onGroupUpdate: (g) => dispatch(GroupActions.group_update(g)),
        onGroupAdd: (g) => dispatch(GroupActions.group_add(g)),
    
        onGroupMemberRemove: ({user, group}) => dispatch(GroupActions.group_memberRemove({user, group})),
        onGroupMemberUpdate: (payload) => dispatch(GroupActions.group_memberUpdate(payload)),
    
        groupFetch: (id) => dispatch(GroupFetch(id)),
        
        groupFakeFetch: (id) => dispatch(GroupFakeFetch(id)),    
       
        groupAsyncUpdate: (group) => dispatch(GroupAsyncUpdate(group))
    }
}