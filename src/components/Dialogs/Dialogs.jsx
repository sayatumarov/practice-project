import React from 'react'
import s from './Dialogs.module.css'
import logo from './logo.png'
import { NavLink } from 'react-router-dom'
function DialogsOut(data){
    debugger
const dialogs = data.map(dialog =>
    <NavLink to={'/messages/'+dialog.UserId} className={s.dialog}>
                    <img src={logo} alt="logo" />
                    <div>
                        <div className={s.text}>
                            <p>{dialog.UserName}</p>
                            <span>{dialog.lastMessage}</span>
                        </div>
                        <p className={s.date}>{dialog.date}</p>
                    </div>
                </NavLink>
    )
    return (dialogs)
}
export default function Dialogs(props) {
    debugger
    return (
        <div className={s.dialogsBlock}>
            <div className={s.search}>
                <input type="text" />
                <button>Поиск</button>
            </div>
            <div className={s.dialogs}>
            {DialogsOut(props.store.getState().DialogsData)}
            </div>
        </div>
    )
}
