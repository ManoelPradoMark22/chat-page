import { Helmet } from 'react-helmet-async'

import { ChatLayout } from './components/chat-layout'

export function ChatPage() {
  return (
    <>
      <Helmet title="Store" />
      <div className="bg-background">
        <div className="h-full ">
          <ChatLayout navCollapsedSize={8} />
        </div>
      </div>
    </>
  )
}
