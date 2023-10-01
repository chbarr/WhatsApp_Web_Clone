import React from 'react'
import facetimeIcon from '../assets/icons/facetime.png';
import arrowIcon from '../assets/icons/arrow.png';
import "./ChatHistory.css"
import Message from './Message';
function ChatHistory(props) {
    return (
        <section className='chatHistoryContainer'>
            <section className='chatHeader'>
                <div className='personInfoContainer'>
                    <button></button>
                    <h3>{props.chat.chatName}</h3>
                </div>
                <div className='optionsContainer'>
                    <div className='faceTimeButton'>
                        <img alt='facetime icon' src={facetimeIcon} />
                        <img alt='arrow icon' src={arrowIcon} />
                    </div>
                    <button></button>
                    <button></button>
                </div>
            </section>
            <section className='chatMessages'>
                <Message
                    messageContent={'Hola hola hola holaaaa'}
                    messageHour={"09:05 AM"}
                />

                <Message
                    messageContent={'Hola hola hola hola'}
                    messageHour={"09:05 AM"}
                />
            </section>
        </section>
    )
}

export default ChatHistory
