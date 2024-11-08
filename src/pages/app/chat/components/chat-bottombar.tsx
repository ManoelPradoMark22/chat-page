import { AnimatePresence, motion } from 'framer-motion'
import {
  FileImage,
  Mic,
  Paperclip,
  PlusCircle,
  SendHorizontal,
  ThumbsUp,
} from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'

import { Button, buttonVariants } from '@/components/ui/button'
import { ChatInput } from '@/components/ui/chat/chat-input'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import useChatStore from '@/hooks/useChatStore'
import { cn } from '@/lib/utils'

import { loggedInUserData, Message } from '../data/data'
import { EmojiPicker } from './emoji-picker'

interface ChatBottombarProps {
  isMobile: boolean
}

export const BottombarIcons = [{ icon: FileImage }, { icon: Paperclip }]

export default function ChatBottombar({ isMobile }: ChatBottombarProps) {
  const [message, setMessage] = useState('')
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const setMessages = useChatStore((state) => state.setMessages)
  const hasInitialResponse = useChatStore((state) => state.hasInitialResponse)
  const setHasInitialResponse = useChatStore(
    (state) => state.setHasInitialResponse,
  )
  const [isLoading, setisLoading] = useState(false)

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value)
  }

  const sendMessage = (newMessage: Message) => {
    useChatStore.setState((state) => ({
      messages: [...state.messages, newMessage],
    }))
  }

  const handleThumbsUp = () => {
    const newMessage: Message = {
      id: message.length + 1,
      name: loggedInUserData.name,
      avatar: loggedInUserData.avatar,
      message: '👍',
    }
    sendMessage(newMessage)
    setMessage('')
  }

  const handleSend = () => {
    if (message.trim()) {
      const newMessage: Message = {
        id: message.length + 1,
        name: loggedInUserData.name,
        avatar: loggedInUserData.avatar,
        message: message.trim(),
      }
      sendMessage(newMessage)
      setMessage('')

      if (inputRef.current) {
        inputRef.current.focus()
      }
    }
  }

  const formattedTime = new Date().toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  })

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }

    if (!hasInitialResponse) {
      setisLoading(true)
      setTimeout(() => {
        setMessages((messages) => [
          ...messages.slice(0, messages.length - 1),
          {
            id: messages.length + 1,
            avatar:
              'https://images.freeimages.com/images/large-previews/971/basic-shape-avatar-1632968.jpg?fmt=webp&h=350',
            name: 'Jane Doe',
            message: 'Awesome! I am just chilling outside.',
            timestamp: formattedTime,
          },
        ])
        setisLoading(false)
        setHasInitialResponse(true)
      }, 2500)
    }
  }, [])

  const handleKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      handleSend()
    }

    if (event.key === 'Enter' && event.shiftKey) {
      event.preventDefault()
      setMessage((prev) => prev + '\n')
    }
  }

  return (
    <div className="flex w-full items-center justify-between gap-2 px-2 py-4">
      <div className="flex">
        <Popover>
          <PopoverTrigger asChild>
            <div
              className={cn(
                buttonVariants({ variant: 'ghost', size: 'icon' }),
                'h-9 w-9',
                'shrink-0',
              )}
            >
              <PlusCircle size={22} className="text-muted-foreground" />
            </div>
          </PopoverTrigger>
          <PopoverContent side="top" className="w-full p-2">
            {message.trim() || isMobile ? (
              <div className="flex gap-2">
                <div
                  className={cn(
                    buttonVariants({ variant: 'ghost', size: 'icon' }),
                    'h-9 w-9',
                    'shrink-0',
                  )}
                >
                  <Mic size={22} className="text-muted-foreground" />
                </div>
                {BottombarIcons.map((icon, index) => (
                  <div
                    key={index}
                    className={cn(
                      buttonVariants({ variant: 'ghost', size: 'icon' }),
                      'h-9 w-9',
                      'shrink-0',
                    )}
                  >
                    <icon.icon size={22} className="text-muted-foreground" />
                  </div>
                ))}
              </div>
            ) : (
              <div
                className={cn(
                  buttonVariants({ variant: 'ghost', size: 'icon' }),
                  'h-9 w-9',
                  'shrink-0',
                )}
              >
                <Mic size={22} className="text-muted-foreground" />
              </div>
            )}
          </PopoverContent>
        </Popover>
        {!message.trim() && !isMobile && (
          <div className="flex">
            {BottombarIcons.map((icon, index) => (
              <div
                key={index}
                className={cn(
                  buttonVariants({ variant: 'ghost', size: 'icon' }),
                  'h-9 w-9',
                  'shrink-0',
                )}
              >
                <icon.icon size={22} className="text-muted-foreground" />
              </div>
            ))}
          </div>
        )}
      </div>

      <AnimatePresence initial={false}>
        <motion.div
          key="input"
          className="relative w-full"
          layout
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1 }}
          transition={{
            opacity: { duration: 0.05 },
            layout: {
              type: 'spring',
              bounce: 0.15,
            },
          }}
        >
          <ChatInput
            value={message}
            ref={inputRef}
            onKeyDown={handleKeyPress}
            onChange={handleInputChange}
            placeholder="Type a message..."
            className="rounded-full"
          />
          <div className="absolute bottom-2 right-4  ">
            <EmojiPicker
              onChange={(value) => {
                setMessage(message + value)
                if (inputRef.current) {
                  inputRef.current.focus()
                }
              }}
            />
          </div>
        </motion.div>

        {message.trim() ? (
          <Button
            className="h-9 w-9 shrink-0"
            onClick={handleSend}
            disabled={isLoading}
            variant="ghost"
            size="icon"
          >
            <SendHorizontal size={22} className="text-muted-foreground" />
          </Button>
        ) : (
          <Button
            className="h-9 w-9 shrink-0"
            onClick={handleThumbsUp}
            disabled={isLoading}
            variant="ghost"
            size="icon"
          >
            <ThumbsUp size={22} className="text-muted-foreground" />
          </Button>
        )}
      </AnimatePresence>
    </div>
  )
}
