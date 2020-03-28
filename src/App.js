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
                        profileData={props.state.profileData}
                        addPost={props.addPost}
                        updateNewPostText={props.updateNewPostText} />}
                />
                <Route path="/dialogs" render={() =>
                    <DialogsComponent
                        dialogsData={props.state.dialogsData}
                        messagesData={props.state.messagesData} />}
                />
            </div>
        </div>
    )
}

export default App
