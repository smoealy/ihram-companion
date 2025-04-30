
import Navbar from '@/components/layout/Navbar';
import BottomNav from '@/components/layout/BottomNav';
import RewardTracker from '@/components/rewards/RewardTracker';

const Rewards = () => {
  return (
    <div className="min-h-screen bg-ihram-offwhite">
      <Navbar />
      <div className="pt-16 pb-16">
        <RewardTracker />
      </div>
      <BottomNav />
    </div>
  );
};

export default Rewards;
