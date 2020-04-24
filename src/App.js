import React from 'react'
import {Route} from 'react-router-dom'
import s from './App.module.css'
import DialogsContainer from './Components/Dialogs/DialogsContainer'
import HeaderComponent from './Components/Header/Header'
import NavbarComponent from './Components/Navbar/Navbar'
import ProfileComponent from './Components/Profile/Profile'
import UsersContainer from './Components/Users/UsersContainer'

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
                <Route path="/users" render={() =>
                    <UsersContainer />}
                />
            </div>
        </div>
    )
}

export default App
