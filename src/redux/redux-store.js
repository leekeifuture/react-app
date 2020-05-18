import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import authReducer from './auth-reducer'
import dialogsReducer from './dialogs-reducer'
import profileReducer from './profile-reducer'
import sidebarReducer from './sidebar-reducer'
import usersReducer from './users-reducer'

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    sidebarPage: sidebarReducer,
    authPage: authReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store
