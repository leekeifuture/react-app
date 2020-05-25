const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

const initialState = {
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
            newMessageBody: action.event.target.value
        }
    } else if (action.type === SEND_MESSAGE) {
        const newMessageText = state.newMessageBody.trim()

        if (newMessageText.length > 0) {
            const messagesData = state.messagesData
            const currentId = messagesData[messagesData.length - 1]['id']
            const newId = currentId + 1
            const newMessage = {id: newId, text: newMessageText}

            return {
                ...state,
                messagesData: [...state.messagesData, newMessage],
                newMessageBody: ''
            }
        }
    }

    return state
}

export const sendMessage = () => ({
    type: SEND_MESSAGE
})
export const updateNewMessageBody = (event) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    event
})

export default dialogsReducer
