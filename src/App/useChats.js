import { useLocalStorge } from "./useLocalStorage";
import React from 'react'

function useChats() {
    const {
        item: chats
    } = useLocalStorge('chats', []);

    console.log('Valor de chats en useChats:', chats);

    return (
        {
            chats
        }
    );
}

export { useChats }
