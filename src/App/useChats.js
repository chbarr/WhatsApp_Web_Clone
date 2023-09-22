import { useLocalStorge } from "./useLocalStorage";
import React from 'react'

function useChats() {
    const {
        item: chats
    } = useLocalStorge('chats', []);

    const [searchValue, setSearchValue] = React.useState('');
    const searchedChats = chats.filter(chat =>
        chat.chatName.toLocaleLowerCase().
            includes(searchValue.toLocaleLowerCase()));

    console.log('Valor de chats en useChats:', chats);

    return (
        {
            chats,
            searchValue,
            setSearchValue,
            searchedChats
        }
    );
}

export { useChats }
