
import { Link, useLocation } from 'react-router-dom';
import { Home, Upload, Award, Settings } from 'lucide-react';

const BottomNav = () => {
  const location = useLocation();
  
  const navItems = [
    { icon: Home, label: 'Home', path: '/ai-planner' },
    { icon: Upload, label: 'Upload', path: '/upload-quote' },
    { icon: Award, label: 'Rewards', path: '/rewards' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];
  
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 flex justify-around items-center h-16">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Link 
            key={item.label}
            to={item.path} 
            className={`flex flex-col items-center justify-center w-full h-full ${
              isActive ? 'text-ihram-green-dark' : 'text-gray-500'
            }`}
          >
            <item.icon className="h-5 w-5 mb-1" />
            <span className="text-xs">{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default BottomNav;
