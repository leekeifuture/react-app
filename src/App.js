import React from 'react'
import {Route} from 'react-router-dom'
import s from './App.module.css'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import HeaderComponent from './components/Header/Header'
import NavbarComponent from './components/Navbar/Navbar'
import ProfileComponent from './components/Profile/Profile'

const App = () => {
    return (
        <div className={s.appWrapper}>
            <HeaderComponent />
            <NavbarComponent />
            <div className={s.appWrapperContent}>
                <Route path="/profile" render={() =>
                    <ProfileComponent />}
                />
                <Route path="/dialogs" render={() =>
                    <DialogsContainer />}
                />
            </div>
        </div>
    )
}

export default App
