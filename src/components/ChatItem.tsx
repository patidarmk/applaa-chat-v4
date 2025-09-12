export function ChatItem({ chat, onSelect }) {
  const lastMessage = chat.messages && chat.messages.length > 0 ? chat.messages[chat.messages.length - 1] : null;
  const contact = chat.type === 'private' ? chat.participants.find(p => p.id !== 0) : null;

  const truncateMessage = (text: string, maxLength: number = 50) => {
    if (!text) return 'No messages yet';
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <div
      className="flex items-center p-3 hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer border-b border-gray-200 dark:border-gray-800"
      onClick={onSelect}
    >
      <img src={contact?.avatar || `https://i.pravatar.cc/150?u=${chat.name}`} alt="Avatar" className="w-12 h-12 rounded-full mr-3" />
      <div className="flex-1 min-w-0">
        <div className="flex justify-between">
          <h3 className="font-semibold truncate">{contact?.name || chat.name}</h3>
          <p className="text-xs text-gray-500 flex-shrink-0">{lastMessage ? lastMessage.timestamp : ''}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
            {truncateMessage(lastMessage?.content)}
          </p>
          {chat.unreadCount > 0 && (
            <span className="bg-green-500 text-white text-xs rounded-full px-2 py-1 flex-shrink-0 ml-2">
              {chat.unreadCount}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}