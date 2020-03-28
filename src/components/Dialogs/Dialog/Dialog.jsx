import React from 'react'
import s from './Dialog.module.css'
import {NavLink} from 'react-router-dom'

const DialogComponent = (props) => {
    let path = "/dialogs/" + props.id
    let name = props.name

    return (
        <div className={s.dialogsItems}>
            <div className={s.dialog}>
                <NavLink to={path}>
                    {name}
                </NavLink>
            </div>
        </div>
    )
}

export default DialogComponent
