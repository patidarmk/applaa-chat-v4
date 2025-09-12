import { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { ChatWindow } from '@/components/ChatWindow';
import { Navigation } from '@/components/Navigation';
import { useIsMobile } from '@/hooks/use-mobile';

export function Chat() {
  const [selectedChat, setSelectedChat] = useState(null);
  const [activeTab, setActiveTab] = useState<'chats' | 'calls' | 'status'>('chats');
  const isMobile = useIsMobile();

  const handleChatSelect = (chat) => {
    setSelectedChat(chat);
  };

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {!isMobile ? (
        // Desktop Layout
        <>
          <div className="w-96 flex-shrink-0">
            <Sidebar onChatSelect={handleChatSelect} />
          </div>
          <div className="flex-1 flex flex-col">
            <ChatWindow chat={selectedChat} />
          </div>
        </>
      ) : (
        // Mobile Layout
        <div className="flex flex-col w-full">
          {selectedChat ? (
            <>
              <div className="flex-1 flex flex-col">
                <ChatWindow chat={selectedChat} />
              </div>
              <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
            </>
          ) : (
            <>
              <div className="flex-1">
                {activeTab === 'chats' && <Sidebar onChatSelect={handleChatSelect} />}
                {activeTab === 'status' && <div className="p-4">Status content</div>}
                {activeTab === 'calls' && <div className="p-4">Calls content</div>}
              </div>
              <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
            </>
          )}
        </div>
      )}
    </div>
  );
}