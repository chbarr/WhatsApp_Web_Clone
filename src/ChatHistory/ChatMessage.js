import React from 'react'
import './ChatMessage.css'
function ChatMessage(props) {
    const messageHourFormatter = (messageHour) => {
        const date = new Date(messageHour);

        // Opciones de formato para la hora
        const timeOptions = {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
        };

        // Formatea la hora utilizando las opciones
        const formattedTime = new Intl.DateTimeFormat('es-CO', timeOptions).format(date);

        return formattedTime;
    }
    return (
        <div className={`messageContainer ${props.isOwnMessage ? 'sendMessage' : 'receivedMessage'}`}>
            <p className='messageContent'>{props.messageContent}</p>
            <span className='messageHour'>{messageHourFormatter(props.messageHour)}</span>
        </div>
    )

}

export { ChatMessage }
