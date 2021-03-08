export function manageFriends(state, action){
    switch (action.type) {
        case 'ADD_FRIEND':
          return {...friend, friends: state}
        case 'REMOVE_FRIEND':
            return {}
        default:
            return state;
    }
}
