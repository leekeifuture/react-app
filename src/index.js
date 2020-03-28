import React from 'react'
import * as serviceWorker from './serviceWorker'
import state, {subscribe, updateNewPostText} from './redux/state'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import {addPost} from './redux/state.js'

let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost}
                     updateNewPostText={updateNewPostText} />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    )
}

rerenderEntireTree(state)

subscribe(rerenderEntireTree)

serviceWorker.unregister()
