import { useLocalStorage } from "./useLocalStorage";
import React from 'react'

function useChats() {
    const {
        item: chats
    } = useLocalStorage('chats', []);

    const [searchValue, setSearchValue] = React.useState('');
    const [selectedChatId, setSelectedChatId] = React.useState(0);
    const searchedChats = chats.filter(chat =>
        chat.chatName.toLocaleLowerCase().
            includes(searchValue.toLocaleLowerCase()));

    return (
        {
            chats,
            searchValue,
            searchedChats,
            selectedChatId,
            setSearchValue,
            setSelectedChatId
        }
    );
}

export { useChats }
