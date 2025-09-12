import { currentUser } from '@/data/db';
import { getMessageStatusIcon } from '@/data/db';
import { cn } from '@/lib/utils';
import { Check, CheckCheck } from 'lucide-react';

export function Message({ message }) {
  const isSentByMe = message.senderId === currentUser.id;

  const truncateMessage = (text: string, maxLength: number = 200) => {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  const renderStatusIcon = (status: string) => {
    switch (status) {
      case 'sent':
        return <Check className="h-4 w-4" />;
      case 'delivered':
        return <CheckCheck className="h-4 w-4" />;
      case 'read':
        return <CheckCheck className="h-4 w-4 text-blue-500" />;
      default:
        return null;
    }
  };

  return (
    <div className={cn('flex', isSentByMe ? 'justify-end' : 'justify-start')}>
      <div
        className={cn(
          'max-w-xs lg:max-w-md p-2 px-3 rounded-lg shadow break-words',
          isSentByMe
            ? 'bg-green-100 dark:bg-green-900 rounded-br-none'
            : 'bg-white dark:bg-gray-800 rounded-bl-none'
        )}
      >
        <p className="text-sm">{truncateMessage(message.content)}</p>
        <div className="flex items-center justify-end gap-1 mt-1">
          <p className="text-xs text-gray-500">{message.timestamp}</p>
          {isSentByMe && renderStatusIcon(message.status)}
        </div>
      </div>
    </div>
  );
}