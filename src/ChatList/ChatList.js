import React from 'react'
import './ChatList.css'
function ChatList(props) {
    return (
        <section className="chatList-container">
            <ul className="chatList">
                {props.render()}
            </ul>
        </section>
    )
}

export { ChatList }
