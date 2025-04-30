
import Navbar from '@/components/layout/Navbar';
import BottomNav from '@/components/layout/BottomNav';
import SettingsPage from '@/components/settings/SettingsPage';

const Settings = () => {
  return (
    <div className="min-h-screen bg-ihram-offwhite">
      <Navbar />
      <div className="pt-16 pb-16">
        <SettingsPage />
      </div>
      <BottomNav />
    </div>
  );
};

export default Settings;
