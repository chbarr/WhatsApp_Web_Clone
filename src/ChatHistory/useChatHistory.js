import React from 'react'

function useChatHistory(sendMessages, receivedMessages) {
    const chatMessages = [...sendMessages, ...receivedMessages];
    return chatMessages.sort(compareHours); 
}

function compareHours(a, b) {
    const timeA = new Date(`${a.sendHour}`);
    const timeB = new Date(`${b.sendHour}`);
    return timeA - timeB;
}

export { useChatHistory }
