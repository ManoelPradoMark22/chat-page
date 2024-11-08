import React, { useEffect, useState } from 'react'

import useChatStore from '@/hooks/useChatStore'

import { Message, UserData } from '../data/data'
import { ChatList } from './chat-list'
import ChatTopbar from './chat-topbar'

interface ChatProps {
  messages?: Message[]
  selectedUser: UserData
  isMobile: boolean
}

export function Chat({ messages, selectedUser, isMobile }: ChatProps) {
  const messagesState = useChatStore((state) => state.messages)

  const sendMessage = (newMessage: Message) => {
    useChatStore.setState((state) => ({
      messages: [...state.messages, newMessage],
    }))
  }

  return (
    <div className="flex h-full w-full flex-col justify-between">
      <ChatTopbar selectedUser={selectedUser} />

      <ChatList
        messages={messagesState}
        selectedUser={selectedUser}
        sendMessage={sendMessage}
        isMobile={isMobile}
      />
    </div>
  )
}
