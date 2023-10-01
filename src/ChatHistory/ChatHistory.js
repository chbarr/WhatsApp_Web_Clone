import React from 'react'
import facetimeIcon from '../assets/icons/facetime.png';
import arrowIcon from '../assets/icons/arrow.png';
import "./ChatHistory.css"
import { ChatMessage } from './ChatMessage';
import { useChatHistory } from './useChatHistory';
function ChatHistory(props) {
    console.log('entrando a ChatHistory')
    const chatMessages = useChatHistory(props.chat.chatMessages);

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
                {chatMessages.map(props.render())}
            </section>
        </section>
    )
}

export { ChatHistory }
