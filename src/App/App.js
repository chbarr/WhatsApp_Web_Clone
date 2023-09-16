import './App.css';
import { ProfileInfo } from '../ProfileInfo/ProfileInfo.js'
import { ChatSearcher } from '../ChatSearcher/ChatSearcher.js'
import { ChatArchiver } from '../ChatArchiver/ChatArchiver.js'
import { ChatList } from '../ChatList/ChatList.js'

import React from 'react';
import ChatItem from '../ChatItem/ChatItem';

function App() {
  return (
    <React.Fragment>
      <section className="app-container">
        <section className="profile-container">
          <ProfileInfo />
          <ChatSearcher />
          <ChatArchiver />
          <ChatList render={
            () => (
              <ChatItem />
            )
          } />
        </section>
        <hr className='vertical-separator'/>
      </section>
    </React.Fragment>
  );
}

export default App;
