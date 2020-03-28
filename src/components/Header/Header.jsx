import React from 'react'
import s from './Header.module.css'

const HeaderComponent = () => {
    return (
        <header className={s.header}>
            <img className={s.logo}
                 src="https://s2.logaster.com/static/v3/img/products/logo.png"
                 alt="Logo" />
        </header>
    )
}

export default HeaderComponent
