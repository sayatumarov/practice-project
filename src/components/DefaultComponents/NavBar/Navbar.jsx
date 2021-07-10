import React from 'react'
import house from './house.png'
import message from './message.png'
import news from './news.png'
import s from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <ul className={s.NavList}>
                <li>
                    <img src={house} />
                    <NavLink to='/'>Моя страница</NavLink>
                </li>
                <li>
                    <img src={message} />
                    <NavLink to='/dialogs'>Диалоги</NavLink>
                </li>
                <li>
                    <img src={news} />
                    <text>Новости</text>
                </li>
            </ul>
        </div>
    )
}
