import React from 'react'
import {Route} from 'react-router-dom'
import s from './App.module.css'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import HeaderComponent from './components/Header/Header'
import NavbarComponent from './components/Navbar/Navbar'
import ProfileContainer from './components/Profile/ProfileContainer'
import UsersContainer from './components/Users/UsersContainer'

const App = () => {
    return (
        <div className={s.appWrapper}>
            <HeaderComponent />
            <NavbarComponent />
            <div className={s.appWrapperContent}>
                <Route path="/profile/:userId?" render={() =>
                    <ProfileContainer />}
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
