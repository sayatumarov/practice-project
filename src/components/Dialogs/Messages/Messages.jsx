import React from 'react'
import s from './Messages.module.css'
import logoFirst from '../logo.png'
import logoSecond from '../logo_2.png'
import logo from '../logo.png'
import icon from './icon.png'
import emoji from './emoji.png'
import send from './send.png'
import { addMessageActionCreator, onMessageChangeActionCreator } from '../../../store/reducers/defaultReducer'


function messagesOut(data){
    let messages = data.map(message => 
        <div className={s.text}>
                    <p>{message[1]}</p>
                    <span>{message[2]}:{message[3]}</span>
        </div>
        )
        return messages
}

export default function Messages(props) {
    function ava(data) {
        if (data == 'me') {
            return <img src={logoSecond} alt="logo" />
        } else{
            return <img src={logoFirst} alt="logo" />
        }
    }
    let id;
    function dialogOut(data){
        let arr = data;
        for (let i = 0; i < arr.length; i++) {
            if('/messages/'+arr[i].id == window.location.pathname){
                id = arr[i].id;
                let messages = arr[i].messages.map(message => 
                    <div className={s.message}>
                        {ava(message[0])}
                        <div className={s.textData}>
                        <div className={s.text}>
                        <p>{message[1]}</p>
                        <span>{message[2]}:{message[3]}</span>
            </div>
                        </div>
                    </div>
                    )
                return(
                    messages 
                )
            }
        }
    }
    let NewMessage = React.createRef();
    function onMessageChange() {
        let text = NewMessage.current.value
        props.dispatch(onMessageChangeActionCreator(text));
    }
    
    function addMessage() {
        NewMessage.current.value = ''
        props.dispatch(addMessageActionCreator(id));
    }
    return (
    
        <div className={s.MessagesBlock}>
            <div className={s.innerBlock}>
                <div className={s.user}>
                <p>UserName</p>
                <img src={logo} alt="logo" />
            </div>
            <div className={s.messages}>
            {dialogOut(props.store.getState().MessagesData)}
                
                </div>
            </div>
            <div className={s.send}>
            <img src={icon} alt="icon" />
            <img src={emoji} alt="emoji" />
            <input type="text" ref={ NewMessage } onChange={onMessageChange} />
            <button onClick={ addMessage }><img src={send} alt="send"/></button>
            </div>
        </div>
    )
}
