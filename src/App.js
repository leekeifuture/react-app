import React from 'react'
import s from './App.module.css'
import HeaderComponent from './components/Header/Header'
import NavbarComponent from './components/Navbar/Navbar'
import DialogsComponent from './components/Dialogs/Dialogs'
import ProfileComponent from './components/Profile/Profile'
import {Route} from 'react-router-dom'

const App = (props) => {
    return (
        <div className={s.appWrapper}>
            <HeaderComponent />
            <NavbarComponent />
            <div className={s.appWrapperContent}>
                <Route path="/profile" render={() =>
                    <ProfileComponent
                        profilePage={props.state.profilePage}
                        dispatch={props.dispatch} />}
                />
                <Route path="/dialogs" render={() =>
                    <DialogsComponent store={props.store} />}
                />
            </div>
        </div>
    )
}

export default App
