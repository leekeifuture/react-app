import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Header.module.css'

const HeaderComponent = (props) => {
    return (
        <header className={s.header}>
            <img className={s.logo}
                 src="https://s2.logaster.com/static/v3/img/products/logo.png"
                 alt="Logo" />

            <div className={s.loginBlock}>
                {props.isAuth
                    ? props.login
                    : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    )
}

export default HeaderComponent
