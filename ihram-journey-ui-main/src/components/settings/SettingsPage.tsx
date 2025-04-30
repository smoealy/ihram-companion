
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const SettingsPage = () => {
  const [language, setLanguage] = useState('english');
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  const handleSaveSettings = () => {
    // In a real app, this would save to API/local storage
    toast.success('Settings saved successfully');
  };

  return (
    <div className="p-4 max-w-md mx-auto mt-6">
      <Card className="bg-white">
        <CardHeader>
          <CardTitle className="text-ihram-green-dark">Settings</CardTitle>
          <CardDescription>Customize your Ihram Companion experience</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="language">Language</Label>
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger id="language">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="arabic">العربية (Arabic)</SelectItem>
                <SelectItem value="urdu">اردو (Urdu)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="dark-mode" className="cursor-pointer">Dark Mode</Label>
            <Switch 
              id="dark-mode" 
              checked={darkMode} 
              onCheckedChange={setDarkMode} 
            />
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="notifications" className="cursor-pointer">Notifications</Label>
            <Switch 
              id="notifications" 
              checked={notifications} 
              onCheckedChange={setNotifications} 
            />
          </div>

          <Button 
            onClick={handleSaveSettings} 
            className="w-full bg-ihram-green hover:bg-ihram-green-dark mt-4"
          >
            Save Settings
          </Button>
        </CardContent>
      </Card>

      <div className="mt-6 text-center text-gray-500 text-sm">
        <p>Ihram Companion v1.0</p>
        <p className="mt-1">© 2025 Ihram Companion</p>
      </div>
    </div>
  );
};

export default SettingsPage;
