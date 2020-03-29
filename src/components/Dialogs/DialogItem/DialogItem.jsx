import React from 'react'
import s from './DialogItem.module.css'
import {NavLink} from 'react-router-dom'

const DialogComponent = (props) => {
    let path = "/dialogs/" + props.id
    let name = props.name

    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={path}>{name}</NavLink>
        </div>
    )
}

export default DialogComponent
