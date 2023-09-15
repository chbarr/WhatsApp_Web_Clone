import React from 'react'

function ChatItem(props) {
    return (
        <li className='chat-item'>
            <button className='chat'>
                <button className='profile-picture'></button>
                <div className='chat-content'>
                    <h3>Pepito perez</h3>
                    <p>El sol brilla y el día se presenta lleno de oportunidades.</p>
                    <span>8:05 P.M</span>
                </div>
            </button>
        </li>
    )
}

export default ChatItem
