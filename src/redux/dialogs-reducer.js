const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
    dialogsData: [
        {id: 1, name: 'Vasya'},
        {id: 2, name: 'Kolya'}
    ],
    messagesData: [
        {id: 1, text: 'Message 1'},
        {id: 2, text: 'Message 2'}
    ],
    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {
    if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        return {
            ...state,
            newMessageBody: action.body
        }
    } else if (action.type === SEND_MESSAGE) {
        let newMessageText = state.newMessageBody.trim()

        if (newMessageText.length > 0) {
            let messagesData = state.messagesData
            let currentId = messagesData[messagesData.length - 1]['id']
            let newId = currentId + 1
            let newMessage = {id: newId, text: newMessageText}

            return {
                ...state,
                messagesData: [...state.messagesData, newMessage],
                newMessageBody: ''
            }
        }
    }

    return state
}

export const sendMessageActionCreator = () => ({
    type: SEND_MESSAGE
})
export const updateNewMessageBodyActionCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
})

export default dialogsReducer
