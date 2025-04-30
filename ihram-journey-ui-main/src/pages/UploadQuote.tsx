
import Navbar from '@/components/layout/Navbar';
import BottomNav from '@/components/layout/BottomNav';
import QuoteUpload from '@/components/upload/QuoteUpload';

const UploadQuote = () => {
  return (
    <div className="min-h-screen bg-ihram-offwhite">
      <Navbar />
      <div className="pt-16 pb-16">
        <QuoteUpload />
      </div>
      <BottomNav />
    </div>
  );
};

export default UploadQuote;
