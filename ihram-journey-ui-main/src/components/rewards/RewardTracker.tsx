
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { MessageSquare, Upload, Award } from 'lucide-react';

const RewardTracker = () => {
  // This would come from API in real implementation
  const userProgress = {
    askedQuestion: true,
    uploadedQuote: false,
    gaveFeedback: false,
    points: 10,
    canRedeem: false
  };

  const totalSteps = 3;
  const completedSteps = [
    userProgress.askedQuestion,
    userProgress.uploadedQuote,
    userProgress.gaveFeedback
  ].filter(Boolean).length;
  
  const progressPercentage = (completedSteps / totalSteps) * 100;

  return (
    <div className="space-y-6 p-4 max-w-md mx-auto mt-6">
      <Card className="bg-white">
        <CardHeader>
          <CardTitle className="text-xl text-ihram-green-dark">Your Journey to Umrah</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress</span>
              <span>{completedSteps} of {totalSteps} steps</span>
            </div>
            <Progress value={progressPercentage} className="h-2 bg-gray-200" />
          </div>

          <div className="space-y-4 mt-6">
            <div className="flex items-center gap-3">
              <div className={`rounded-full p-2 ${userProgress.askedQuestion ? 'bg-ihram-green text-white' : 'bg-gray-200'}`}>
                <MessageSquare className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="font-medium">Step 1: Ask a question</p>
                <p className="text-sm text-gray-500">
                  {userProgress.askedQuestion ? 'Completed' : 'Not yet completed'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className={`rounded-full p-2 ${userProgress.uploadedQuote ? 'bg-ihram-green text-white' : 'bg-gray-200'}`}>
                <Upload className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="font-medium">Step 2: Upload a quote</p>
                <p className="text-sm text-gray-500">
                  {userProgress.uploadedQuote ? 'Completed' : 'Not yet completed'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className={`rounded-full p-2 ${userProgress.gaveFeedback ? 'bg-ihram-green text-white' : 'bg-gray-200'}`}>
                <Award className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="font-medium">Step 3: Give feedback</p>
                <p className="text-sm text-gray-500">
                  {userProgress.gaveFeedback ? 'Completed' : 'Not yet completed'}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white">
        <CardHeader>
          <CardTitle className="text-xl text-ihram-green-dark">Milestone Points</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-2xl font-bold">{userProgress.points}</p>
              <p className="text-sm text-gray-500">Current balance</p>
            </div>
            <Button 
              className={`bg-ihram-gold hover:bg-ihram-gold-dark ${!userProgress.canRedeem && 'opacity-50 cursor-not-allowed'}`}
              disabled={!userProgress.canRedeem}
            >
              Redeem Reward
            </Button>
          </div>
          <p className="text-sm text-center mt-2">
            Complete all 3 steps to unlock your Umrah reward
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default RewardTracker;
