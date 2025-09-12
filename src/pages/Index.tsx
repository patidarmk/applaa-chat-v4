import { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { ChatWindow } from '@/components/ChatWindow';
import { StatusPage } from '@/components/StatusPage';
import { CallsPage } from '@/components/CallsPage';
import { Navigation } from '@/components/Navigation';
import { Header } from '@/components/Header';
import { StatusViewer } from '@/components/StatusViewer';
import { useIsMobile } from '@/hooks/use-mobile';
import { ThemeProvider } from '@/hooks/useTheme';
import { statuses } from '@/data/db';

function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Index() {
  const [selectedChat, setSelectedChat] = useState(null);
  const [activeTab, setActiveTab] = useState<'chats' | 'calls' | 'status'>('chats');
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [statusIndex, setStatusIndex] = useState(0);
  const isMobile = useIsMobile();

  const handleChatSelect = (chat) => {
    setSelectedChat(chat);
  };

  const handleBackToList = () => {
    setSelectedChat(null);
    setSelectedStatus(null);
  };

  const handleStatusClick = (status) => {
    const index = statuses.findIndex(s => s.id === status.id);
    setStatusIndex(index);
    setSelectedStatus(status);
  };

  const handleLogoClick = () => {
    setSelectedChat(null);
    setSelectedStatus(null);
    setActiveTab('chats');
  };

  const handleNextStatus = () => {
    const nextIndex = (statusIndex + 1) % statuses.length;
    setStatusIndex(nextIndex);
    setSelectedStatus(statuses[nextIndex]);
  };

  const handlePreviousStatus = () => {
    const prevIndex = statusIndex === 0 ? statuses.length - 1 : statusIndex - 1;
    setStatusIndex(prevIndex);
    setSelectedStatus(statuses[prevIndex]);
  };

  const renderContent = () => {
    // Status viewer overlay
    if (selectedStatus) {
      return (
        <StatusViewer 
          status={selectedStatus} 
          onClose={handleBackToList}
          onNext={handleNextStatus}
          onPrevious={handlePreviousStatus}
        />
      );
    }

    // Mobile view with selected chat
    if (isMobile && selectedChat) {
      return (
        <div className="flex flex-col h-full">
          <div className="flex items-center p-3 border-b border-gray-200 dark:border-gray-800 bg-gray-200 dark:bg-gray-800">
            <button 
              onClick={handleBackToList}
              className="mr-3 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
            >
              ← Back
            </button>
          </div>
          <ChatWindow chat={selectedChat} />
        </div>
      );
    }

    // Desktop view or mobile list view
    switch (activeTab) {
      case 'chats':
        return (
          <div className="flex h-full">
            <div className={cn("w-96 flex-shrink-0", isMobile && "w-full")}>
              <Sidebar onChatSelect={handleChatSelect} />
            </div>
            {!isMobile && (
              <div className="flex-1 flex flex-col">
                <ChatWindow chat={selectedChat} />
              </div>
            )}
          </div>
        );
      case 'status':
        return <StatusPage />;
      case 'calls':
        return <CallsPage />;
      default:
        return null;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <Header activeTab={activeTab} onTabChange={setActiveTab} onLogoClick={handleLogoClick} />
        <main className={cn("h-[calc(100vh-80px)]", isMobile && "h-[calc(100vh-140px)]")}>
          {renderContent()}
        </main>
        {isMobile && !selectedChat && !selectedStatus && (
          <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
        )}
      </div>
    </ThemeProvider>
  );
}