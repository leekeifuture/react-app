const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

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

export const sendMessageActionCreator = () => ({
    type: SEND_MESSAGE
})

export const updateNewMessageBodyActionCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
})

export default dialogsReducer
