import React from 'react'
import Dialog from './DialogItem/Dialog'
import s from './Dialogs.module.css'
import MessagesContainer from './Messages/MessagesContainer'

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogsData.map(dialog =>
                    <Dialog id={dialog.id}
                            name={dialog.name}
                            key={dialog.id}
                    />
                )}
            </div>
            <MessagesContainer />
        </div>
    )
}

export default Dialogs
