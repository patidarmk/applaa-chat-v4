import { CircleUser, MessageSquarePlus, MoreVertical, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { chats, currentUser } from '@/data/db';
import { ChatItem } from './ChatItem';
import { ThemeToggle } from './ThemeToggle';
import { useState, useMemo } from 'react';

export function Sidebar({ onChatSelect }) {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter chats based on search query
  const filteredChats = useMemo(() => {
    if (!searchQuery.trim()) return chats;
    
    const query = searchQuery.toLowerCase();
    return chats.filter(chat => {
      if (chat.type === 'private') {
        const contact = chat.participants.find(p => p.id !== 0);
        return contact?.name.toLowerCase().includes(query);
      } else {
        return chat.name?.toLowerCase().includes(query);
      }
    });
  }, [searchQuery]);

  return (
    <div className="flex flex-col h-full bg-gray-100 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800">
      <header className="flex items-center justify-between p-3 border-b border-gray-200 dark:border-gray-800 bg-gray-200 dark:bg-gray-800">
        <img src={currentUser.avatar} alt="My Avatar" className="w-10 h-10 rounded-full" />
        <div className="flex items-center gap-1">
          <ThemeToggle />
          <Button variant="ghost" size="icon"><MessageSquarePlus className="h-5 w-5" /></Button>
          <Button variant="ghost" size="icon"><MoreVertical className="h-5 w-5" /></Button>
        </div>
      </header>
      
      <div className="flex-1 overflow-y-auto">
        <div className="p-2 bg-gray-100 dark:bg-gray-900">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            <Input 
              placeholder="Search or start new chat" 
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          {filteredChats.length === 0 ? (
            <div className="p-4 text-center text-gray-500 dark:text-gray-400">
              <p className="text-sm">No chats found</p>
              <p className="text-xs mt-1">Try a different search term</p>
            </div>
          ) : (
            filteredChats.map(chat => (
              <ChatItem key={chat.id} chat={chat} onSelect={() => onChatSelect(chat)} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}