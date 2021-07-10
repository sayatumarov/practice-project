import initialState from "../initialState";


function reducer(state = initialState, action) {
        debugger
        if(action.type == 'ADD_MESSAGE'){
                let newMessage = {
                        id: action.id,
                        message: ['me', state.NewMessageText, 19, 35]
                    };
                    state.MessagesData[newMessage.id-1].messages.push(newMessage.message);
                    return state;
                } else if(action.type == 'CHANGE_MESSAGE'){
                        state.NewMessageText = action.message
                        return state; 
                } else{
                        return state;
                }
}
export const addMessageActionCreator = (id) => ({type: 'ADD_MESSAGE', id: id})
export const onMessageChangeActionCreator = (text) => ({type: 'CHANGE_MESSAGE', message: text})
export default reducer