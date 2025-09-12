import { useState, useEffect } from 'react';
import { MoreVertical, Phone, Search, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MessageList } from './MessageList';
import { MessageInput } from './MessageInput';
import { Input } from '@/components/ui/input';

// Auto-generated replies based on message content
const generateAutoReply = (message: string): string => {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
    return 'Hello! How can I help you today?';
  } else if (lowerMessage.includes('how are you')) {
    return "I'm doing great, thanks for asking! How about you?";
  } else if (lowerMessage.includes('thank')) {
    return "You're welcome! 😊";
  } else if (lowerMessage.includes('bye') || lowerMessage.includes('goodbye')) {
    return 'Goodbye! Have a great day!';
  } else if (lowerMessage.includes('help')) {
    return "I'd be happy to help! What do you need assistance with?";
  } else if (lowerMessage.includes('meeting')) {
    return "Sure, let's schedule a meeting. When works best for you?";
  } else if (lowerMessage.includes('project')) {
    return "The project is going well! I'll share the latest updates soon.";
  } else {
    // Random friendly responses
    const responses = [
      "Got it! Thanks for the update.",
      "Sounds good to me!",
      "I understand, let me know if you need anything.",
      "That's interesting! Tell me more.",
      "I see what you mean.",
      "Absolutely! I agree with that.",
      "Thanks for sharing that with me."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }
};

export function ChatWindow({ chat }) {
  const [messages, setMessages] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Update messages when chat changes
  useEffect(() => {
    if (chat) {
      setMessages(chat.messages || []);
    } else {
      setMessages([]);
    }
  }, [chat]);

  if (!chat) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center bg-gray-100 dark:bg-gray-900">
        <div className="p-8 rounded-lg bg-white dark:bg-gray-800 shadow-lg">
          <h2 className="text-2xl font-semibold">Welcome to Applaa Chat</h2>
          <p className="text-gray-500 mt-2">Select a chat to start messaging.</p>
        </div>
      </div>
    );
  }

  const handleSendMessage = (newMessageContent) => {
    const newMessage = {
      id: messages.length + 1,
      senderId: 0, // Current user
      content: newMessageContent,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'sent',
    };
    
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);

    // Simulate auto-reply after 1-2 seconds
    setTimeout(() => {
      const autoReply = {
        id: updatedMessages.length + 1,
        senderId: chat.participants.find(p => p.id !== 0)?.id || 1,
        content: generateAutoReply(newMessageContent),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages(prev => [...prev, autoReply]);
    }, 1000 + Math.random() * 1000);
  };

  const contact = chat.type === 'private' ? chat.participants.find(p => p.id !== 0) : null;

  return (
    <div className="flex flex-col h-full bg-cover bg-center" style={{ backgroundImage: "url('/bg-chat.png')" }}>
      <header className="flex items-center p-3 border-b border-gray-200 dark:border-gray-800 bg-gray-200 dark:bg-gray-800">
        <img src={contact?.avatar || `https://i.pravatar.cc/150?u=${chat.name}`} alt="Avatar" className="w-10 h-10 rounded-full mr-3" />
        <div className="flex-1">
          <h3 className="font-semibold">{contact?.name || chat.name}</h3>
          <p className="text-xs text-gray-500">{contact?.online ? 'Online' : `Last seen ${contact?.lastSeen}`}</p>
        </div>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" onClick={() => setShowSearch(!showSearch)}>
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon"><Video className="h-5 w-5" /></Button>
          <Button variant="ghost" size="icon"><Phone className="h-5 w-5" /></Button>
          <Button variant="ghost" size="icon"><MoreVertical className="h-5 w-5" /></Button>
        </div>
      </header>
      
      {showSearch && (
        <div className="p-3 border-b border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900">
          <Input
            placeholder="Search messages..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full"
          />
        </div>
      )}
      
      <MessageList messages={messages} searchQuery={searchQuery} />
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
}