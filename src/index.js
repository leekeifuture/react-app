import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom'
import App from './App'
import './index.css'
import store from './redux/redux-store.js'
import * as serviceWorker from './serviceWorker'

let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <App />
                </Provider>
            </BrowserRouter>
        </React.StrictMode>, document.getElementById('root')
    )
}

rerenderEntireTree()

store.subscribe(() => {
    rerenderEntireTree()
})

serviceWorker.unregister()
