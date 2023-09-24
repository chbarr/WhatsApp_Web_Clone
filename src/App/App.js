import './App.css';
import { ProfileInfo } from '../ProfileInfo/ProfileInfo.js'
import { ChatSearcher } from '../ChatSearcher/ChatSearcher.js'
import { ChatArchiver } from '../ChatArchiver/ChatArchiver.js'
import { ChatList } from '../ChatList/ChatList.js'
import { ChatItem } from '../ChatItem/ChatItem.js'

import React from 'react';
import { useChats } from './useChats';
import ChatHistory from '../ChatHistory/ChatHistory';

function App() {

  const {
    chats,
    searchValue,
    searchedChats,
    selectedChatId,
    setSearchValue,
    setSelectedChatId
  } = useChats();

  const selectedChat = chats.filter(chat => chat.id === selectedChatId)[0];

  return (
    <React.Fragment>
      <section className="app-container">
        <section className="profile-container">
          <ProfileInfo />
          <ChatSearcher searchValue={searchValue} setSearchValue={setSearchValue} />
          <ChatArchiver />
          <ChatList
            chats={searchedChats}
            render={
              () => chat => (
                <ChatItem
                  key={chat.id}
                  chat={chat}
                  setSelectedChatId={setSelectedChatId}
                />
              )
            }
          />
        </section>
        <hr className='vertical-separator' />
        {selectedChatId !== 0 &&
          <ChatHistory
            chat={selectedChat}>
          </ChatHistory>}
      </section>
    </React.Fragment>
  );
}

export default App;
