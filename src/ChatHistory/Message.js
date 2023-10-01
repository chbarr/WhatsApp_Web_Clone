import React from 'react'
import './Message.css'
function Message(props) {
    return (
        <div className='messageContainer sendMessage'>
            <p className='messageContent'>{props.messageContent}</p>
            <span className='messageHour'>{props.messageHour}</span>
        </div>
    )
}

export default Message
