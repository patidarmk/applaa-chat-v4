import { MessageCircle, Phone, Circle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface NavigationProps {
  activeTab: 'chats' | 'calls' | 'status';
  onTabChange: (tab: 'chats' | 'calls' | 'status') => void;
}

export function Navigation({ activeTab, onTabChange }: NavigationProps) {
  return (
    <div className="flex items-center justify-around bg-gray-200 dark:bg-gray-800 border-t border-gray-300 dark:border-gray-700 p-2">
      <Button
        variant="ghost"
        size="sm"
        className={cn(
          'flex flex-col items-center gap-1 px-3 py-2',
          activeTab === 'chats' && 'bg-gray-300 dark:bg-gray-700 rounded-lg'
        )}
        onClick={() => onTabChange('chats')}
      >
        <MessageCircle className="h-5 w-5" />
        <span className="text-xs">Chats</span>
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className={cn(
          'flex flex-col items-center gap-1 px-3 py-2',
          activeTab === 'status' && 'bg-gray-300 dark:bg-gray-700 rounded-lg'
        )}
        onClick={() => onTabChange('status')}
      >
        <Circle className="h-5 w-5" />
        <span className="text-xs">Status</span>
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className={cn(
          'flex flex-col items-center gap-1 px-3 py-2',
          activeTab === 'calls' && 'bg-gray-300 dark:bg-gray-700 rounded-lg'
        )}
        onClick={() => onTabChange('calls')}
      >
        <Phone className="h-5 w-5" />
        <span className="text-xs">Calls</span>
      </Button>
    </div>
  );
}