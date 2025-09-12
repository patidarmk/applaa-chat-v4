import { useState } from 'react';
import { Paperclip, Mic, Send, Smile } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import EmojiPicker from 'emoji-picker-react';

export function MessageInput({ onSendMessage }) {
  const [message, setMessage] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
      setShowEmojiPicker(false);
    }
  };

  const onEmojiClick = (emojiObject) => {
    setMessage(prevMessage => prevMessage + emojiObject.emoji);
  };

  return (
    <div className="p-3 bg-gray-200 dark:bg-gray-800 relative">
      {showEmojiPicker && (
        <div className="absolute bottom-16">
          <EmojiPicker onEmojiClick={onEmojiClick} />
        </div>
      )}
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
          <Smile className="h-6 w-6" />
        </Button>
        <Button variant="ghost" size="icon">
          <Paperclip className="h-6 w-6" />
        </Button>
        <Input
          placeholder="Type a message"
          className="flex-1"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        {message ? (
          <Button size="icon" onClick={handleSend}>
            <Send className="h-6 w-6" />
          </Button>
        ) : (
          <Button size="icon">
            <Mic className="h-6 w-6" />
          </Button>
        )}
      </div>
    </div>
  );
}