
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

type Language = 'English' | 'Arabic' | 'Urdu';

const Navbar = () => {
  const [language, setLanguage] = useState<Language>('English');
  const [showLangMenu, setShowLangMenu] = useState(false);

  const toggleLangMenu = () => {
    setShowLangMenu(!showLangMenu);
  };

  const selectLanguage = (lang: Language) => {
    setLanguage(lang);
    setShowLangMenu(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white shadow-sm h-16 px-4 md:px-8 flex items-center justify-between">
      <Link to="/" className="flex items-center">
        <h1 className="text-xl md:text-2xl font-semibold text-ihram-green-dark">
          Ihram Companion
        </h1>
      </Link>

      <div className="flex items-center gap-2">
        <div className="relative">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={toggleLangMenu} 
            className="text-ihram-green-dark"
          >
            <Globe className="h-5 w-5" />
          </Button>
          
          {showLangMenu && (
            <div className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div className="py-1">
                {['English', 'Arabic', 'Urdu'].map((lang) => (
                  <button
                    key={lang}
                    className={`${
                      language === lang 
                        ? 'bg-ihram-green-light text-ihram-green-dark' 
                        : 'text-gray-700'
                    } block px-4 py-2 text-sm w-full text-left`}
                    onClick={() => selectLanguage(lang as Language)}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
