
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Send } from 'lucide-react';

interface MessageInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

const MessageInput: React.FC<MessageInputProps> = ({ onSendMessage, isLoading }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="border-t border-gray-200 p-3 bg-white flex items-end gap-2"
    >
      <Textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your question about Umrah..."
        className="resize-none min-h-[50px] max-h-32"
        disabled={isLoading}
      />
      <Button 
        type="submit" 
        size="icon" 
        disabled={!message.trim() || isLoading}
        className="bg-ihram-green h-10 w-10"
      >
        <Send className="h-5 w-5" />
      </Button>
    </form>
  );
};

export default MessageInput;
