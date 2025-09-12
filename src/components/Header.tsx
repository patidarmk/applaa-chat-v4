import { MessageCircle, Phone, Circle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  activeTab: 'chats' | 'calls' | 'status';
  onTabChange: (tab: 'chats' | 'calls' | 'status') => void;
  onLogoClick?: () => void;
}

export function Header({ activeTab, onTabChange, onLogoClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200/50 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={onLogoClick}
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
              <MessageCircle className="text-white h-6 w-6" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
              Applaa Chat
            </span>
          </button>
          
          <nav className="hidden md:flex items-center space-x-1">
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                'flex items-center gap-2 px-3 py-2',
                activeTab === 'chats' && 'bg-green-100 text-green-700 rounded-lg'
              )}
              onClick={() => onTabChange('chats')}
            >
              <MessageCircle className="h-4 w-4" />
              Chats
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                'flex items-center gap-2 px-3 py-2',
                activeTab === 'status' && 'bg-green-100 text-green-700 rounded-lg'
              )}
              onClick={() => onTabChange('status')}
            >
              <Circle className="h-4 w-4" />
              Status
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                'flex items-center gap-2 px-3 py-2',
                activeTab === 'calls' && 'bg-green-100 text-green-700 rounded-lg'
              )}
              onClick={() => onTabChange('calls')}
            >
              <Phone className="h-4 w-4" />
              Calls
            </Button>
          </nav>
          
          <div className="flex items-center gap-2">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}