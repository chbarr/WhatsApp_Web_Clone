import React from 'react'
import './ChatItem.css'
function ChatItem(props) {
    return (
        <li className='chat-item'>
            <section className='chat'>
                <button className='profile-picture'></button>
                <h3 className='person-name'>Pepito perez</h3>
                <p className='person-message'>El sol brilla y el día se presenta lleno de oportunidades.</p>
                <span className='person-name-time'>8:05 P.M</span>
            </section>
            <hr className='separator' />
        </li>
    )
}

export default ChatItem
