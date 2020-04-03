const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

const dialogsReducer = (state, action) => {
    if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        state.newMessageBody = action.body
    } else if (action.type === SEND_MESSAGE) {
        let body = state.newMessageBody
        let messagesData = state.messagesData
        let currentId = messagesData[messagesData.length - 1]['id']
        let newId = currentId + 1
        messagesData.push({id: newId, text: body})

        state.newMessageBody = ''
    }

    return state
}

export const sendMessageCreator = () => ({
    type: SEND_MESSAGE
})

export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
})

export default dialogsReducer
