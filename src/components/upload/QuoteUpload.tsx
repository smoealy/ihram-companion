import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, MapPin, Phone, Flag } from 'lucide-react';
import { toast } from 'sonner';

// Define available countries with their phone codes
const countries = [
  { name: "Saudi Arabia", code: "SA", phoneCode: "+966" },
  { name: "United Arab Emirates", code: "UAE", phoneCode: "+971" },
  { name: "United Kingdom", code: "UK", phoneCode: "+44" },
  { name: "United States", code: "US", phoneCode: "+1" },
  { name: "Egypt", code: "EG", phoneCode: "+20" },
  { name: "Pakistan", code: "PK", phoneCode: "+92" },
  { name: "India", code: "IN", phoneCode: "+91" },
  { name: "Turkey", code: "TR", phoneCode: "+90" },
  { name: "Jordan", code: "JO", phoneCode: "+962" },
  { name: "Other", code: "OTHER", phoneCode: "" }
];

// City options by country
const cityOptions = {
  "Saudi Arabia": [
    'Mecca',
    'Medina',
    'Jeddah',
    'Riyadh',
    'Taif'
  ],
  "United Arab Emirates": [
    'Dubai',
    'Abu Dhabi',
    'Sharjah'
  ],
  "United Kingdom": [
    'London',
    'Manchester',
    'Birmingham'
  ],
  "United States": [
    'New York',
    'Chicago',
    'Los Angeles',
    'Houston'
  ],
  "Egypt": [
    'Cairo',
    'Alexandria',
    'Sharm El Sheikh'
  ],
  "Pakistan": [
    'Karachi',
    'Islamabad',
    'Lahore'
  ],
  "India": [
    'Mumbai',
    'Delhi',
    'Hyderabad'
  ],
  "Turkey": [
    'Istanbul',
    'Ankara',
    'Bursa'
  ],
  "Jordan": [
    'Amman',
    'Aqaba',
    'Zarqa'
  ],
  "Other": [
    'Other'
  ]
};

const QuoteUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [notes, setNotes] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [phoneCountryCode, setPhoneCountryCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleCountryChange = (value: string) => {
    setCountry(value);
    setCity(''); // Reset city when country changes
    
    // Set the phone country code when country changes
    const selectedCountry = countries.find(c => c.name === value);
    if (selectedCountry) {
      setPhoneCountryCode(selectedCountry.phoneCode);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      toast.error('Please upload a quote file');
      return;
    }
    
    if (!country) {
      toast.error('Please select your country');
      return;
    }
    
    if (!city) {
      toast.error('Please select a city');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      toast.success('Quote uploaded successfully!');
    }, 1500);
  };

  // Format full phone number with country code
  const getFullPhoneNumber = () => {
    if (!phoneNumber) return '';
    return `${phoneCountryCode} ${phoneNumber}`;
  };

  if (isSuccess) {
    return (
      <Card className="w-full max-w-md mx-auto mt-6 bg-white">
        <CardHeader>
          <CardTitle className="text-ihram-green-dark">Quote Uploaded!</CardTitle>
          <CardDescription>
            Thank you for uploading your quote. Our AI will analyze it and provide feedback shortly.
            {phoneNumber && <p className="mt-2">We'll contact you at {getFullPhoneNumber()} if we find a better price.</p>}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center py-6">
          <div className="bg-ihram-green-light rounded-full p-4">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-12 w-12 text-ihram-green-dark"
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                clipRule="evenodd" 
              />
            </svg>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            onClick={() => setIsSuccess(false)}
            className="w-full bg-ihram-green hover:bg-ihram-green-dark"
          >
            Upload Another Quote
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto mt-6 bg-white">
      <CardHeader>
        <CardTitle className="text-ihram-green-dark">Upload Your Umrah Quote</CardTitle>
        <CardDescription>
          Share your Umrah quote details to get personalized analysis and tips
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="file">Quote Document</Label>
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="file"
                className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 border-gray-300"
              >
                {file ? (
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <p className="mb-2 text-sm text-gray-500">
                      <span className="font-semibold">{file.name}</span>
                    </p>
                    <p className="text-xs text-gray-500">
                      {(file.size / 1024).toFixed(2)} KB
                    </p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className="w-8 h-8 mb-3 text-gray-400" />
                    <p className="mb-2 text-sm text-gray-500">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-500">
                      PDF, Image, or Text (MAX. 10MB)
                    </p>
                  </div>
                )}
                <input
                  id="file"
                  type="file"
                  onChange={handleFileChange}
                  accept=".pdf,.jpg,.jpeg,.png,.docx,.txt"
                  className="hidden"
                />
              </label>
            </div>
          </div>
          
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="notes">Notes (Optional)</Label>
            <Textarea
              id="notes"
              placeholder="Add any additional information about your quote..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="resize-none"
            />
          </div>
          
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="country" className="flex items-center gap-1.5">
              <Flag className="h-4 w-4" /> Your Country
            </Label>
            <Select value={country} onValueChange={handleCountryChange}>
              <SelectTrigger id="country">
                <SelectValue placeholder="Select your country" />
              </SelectTrigger>
              <SelectContent>
                {countries.map((country) => (
                  <SelectItem key={country.code} value={country.name}>{country.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {country && (
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="city" className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4" /> Which city is this quote from?
              </Label>
              <Select value={city} onValueChange={setCity}>
                <SelectTrigger id="city">
                  <SelectValue placeholder="Select a city" />
                </SelectTrigger>
                <SelectContent>
                  {cityOptions[country as keyof typeof cityOptions]?.map((cityName) => (
                    <SelectItem key={cityName} value={cityName}>{cityName}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="phoneNumber" className="flex items-center gap-1.5">
              <Phone className="h-4 w-4" /> Phone Number
            </Label>
            <div className="flex items-center space-x-2">
              <div className="w-1/3">
                <Select value={phoneCountryCode} onValueChange={setPhoneCountryCode}>
                  <SelectTrigger id="phoneCountryCode" className="w-full">
                    <SelectValue placeholder="Code" />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.filter(c => c.phoneCode).map((country) => (
                      <SelectItem key={country.code} value={country.phoneCode}>
                        {country.phoneCode} ({country.code})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="w-2/3">
                <Input
                  id="phoneNumber"
                  type="tel"
                  placeholder="Phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="border-gray-300"
                />
              </div>
            </div>
            <p className="text-xs text-muted-foreground">If you'd like us to contact you with better prices.</p>
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-ihram-green hover:bg-ihram-green-dark"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Uploading...' : 'Submit Quote'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default QuoteUpload;
