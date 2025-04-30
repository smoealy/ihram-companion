import { useState, useEffect, useRef } from 'react';
import MessageInput from './MessageInput';
import { logAIInteraction } from '../firebase/logInteraction';

type MessageType = 'user' | 'ai';

interface Message {
  id: string;
  content: string;
  type: MessageType;
  interactionId?: string;
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
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      type: 'user',
    };

    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    setIsLoading(true);

    try {
      const res = await fetch('/api/askAI', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updatedMessages.map((m) => ({ role: m.type === 'user' ? 'user' : 'assistant', content: m.content })) }),
      });

      const data = await res.json();
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: data.reply || 'Sorry, there was an issue generating a response.',
        type: 'ai',
      };

      const interactionId = await logAIInteraction(content, aiResponse.content, 0);
      aiResponse.interactionId = interactionId;

      setMessages([...updatedMessages, aiResponse]);
    } catch (err) {
      console.error('Error calling /api/askAI:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)] bg-ihram-offwhite">
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={message.type === 'user' ? 'user-message text-right' : 'ai-message text-left'}
          >
            <div className={`inline-block px-4 py-2 rounded-lg ${message.type === 'user' ? 'bg-white' : 'bg-green-100'}`}>
              <p>{message.content}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="ai-message text-left mt-2">
            <div className="flex space-x-2 items-center">
              <div className="w-2 h-2 rounded-full bg-ihram-green animate-pulse-light" />
              <div className="w-2 h-2 rounded-full bg-ihram-green animate-pulse-light delay-200" />
              <div className="w-2 h-2 rounded-full bg-ihram-green animate-pulse-light delay-400" />
              <span className="ml-2 text-sm text-gray-500">Ihram Companion is thinking...</span>
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>
      <MessageInput onSendMessage={handleSendMessage} isLoading={isLoading} />
    </div>
  );
};

export default ChatInterface;
