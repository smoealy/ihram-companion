
import { useState } from 'react';
import MessageInput from './MessageInput';

type MessageType = 'user' | 'ai';

interface Message {
  id: string;
  content: string;
  type: MessageType;
}

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Assalamu Alaikum, how can I assist your Umrah planning today?',
      type: 'ai',
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = (content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      type: 'user',
    };
    
    setMessages([...messages, newMessage]);
    setIsLoading(true);
    
    // Simulate AI response after a delay
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: "I'll help you plan your Umrah journey. What specific guidance do you need today?",
        type: 'ai',
      };
      
      setMessages(prevMessages => [...prevMessages, aiResponse]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)] bg-ihram-offwhite">
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message) => (
          <div 
            key={message.id} 
            className={message.type === 'user' ? 'user-message' : 'ai-message'}
          >
            {message.content}
          </div>
        ))}
        
        {isLoading && (
          <div className="ai-message">
            <div className="flex space-x-2 items-center">
              <div className="w-2 h-2 rounded-full bg-ihram-green animate-pulse-light"></div>
              <div className="w-2 h-2 rounded-full bg-ihram-green animate-pulse-light delay-200"></div>
              <div className="w-2 h-2 rounded-full bg-ihram-green animate-pulse-light delay-400"></div>
              <span className="ml-2 text-sm text-gray-500">Ihram Companion is thinking...</span>
            </div>
          </div>
        )}
      </div>
      
      <MessageInput onSendMessage={handleSendMessage} isLoading={isLoading} />
    </div>
  );
};

export default ChatInterface;
