import React from 'react'
import './ChatMessage.css'
function ChatMessage(props) {
    return (
        <div className={`messageContainer ${props.isOwnMessage ? 'sendMessage' : 'receivedMessage'}`}>
            <p className='messageContent'>{props.messageContent}</p>
            <span className='messageHour'>{props.messageHour}</span>
        </div>
    )
}

export { ChatMessage }
