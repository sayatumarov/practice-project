import React from 'react'
import s from './Header.module.css'
import logo from './logo.png'
import UserLogo from './UserLogo.png'
export default function Header() {
    return (
        <header className={s.header}>
            <img src={logo}/>
            <div className={s.search}>
                <input type="text"/>
                <button>Поиск</button>
            </div>
            <div className={s.user}>
                <name>UserName</name>
                <img src={UserLogo} />
            </div>
        </header>
    )
}
