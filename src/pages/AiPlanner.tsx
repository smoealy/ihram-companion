
import Navbar from '@/components/layout/Navbar';
import BottomNav from '@/components/layout/BottomNav';
import ChatInterface from '@/components/chat/ChatInterface';

const AiPlanner = () => {
  return (
    <div className="min-h-screen bg-ihram-offwhite">
      <Navbar />
      <div className="pt-16 pb-16">
        <ChatInterface />
      </div>
      <BottomNav />
    </div>
  );
};

export default AiPlanner;
