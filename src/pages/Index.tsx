
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-ihram-offwhite p-4">
      <div className="text-center max-w-xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-ihram-green-dark">
          Ihram Companion
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-700">
          Your AI-powered guide to plan, prepare, and progress toward Umrah
        </p>
        <div className="w-20 h-1 bg-ihram-gold mx-auto my-6"></div>
        <p className="mb-8 text-gray-600">
          Get personalized guidance, compare quotes, track your preparation progress,
          and earn rewards on your journey to Umrah.
        </p>
        <Button
          onClick={() => navigate('/ai-planner')}
          className="px-8 py-6 text-lg bg-ihram-green hover:bg-ihram-green-dark"
        >
          Start Planning
        </Button>
      </div>
      
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
          <div className="bg-ihram-green-light w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 text-ihram-green-dark"
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="font-medium text-lg mb-2">Ask AI</h3>
          <p className="text-gray-600 text-sm">
            Get answers to all your Umrah questions from our AI assistant
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
          <div className="bg-ihram-green-light w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 text-ihram-green-dark"
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="font-medium text-lg mb-2">Upload Quotes</h3>
          <p className="text-gray-600 text-sm">
            Submit your Umrah package quotes for analysis and comparison
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
          <div className="bg-ihram-green-light w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 text-ihram-green-dark"
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
            </svg>
          </div>
          <h3 className="font-medium text-lg mb-2">Track Progress</h3>
          <p className="text-gray-600 text-sm">
            Follow your preparation milestones and earn rewards
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
