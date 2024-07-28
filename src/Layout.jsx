import { Routes, Route } from 'react-router-dom';

import Navigation from './Navigation/Navigation';
import QrCodeGeneretor from './Generate/QrCodeGeneretor';
import QrCodeScanner from './Scan/QrCodeScanner';

import ScanHistory from './components/ScanHistory';
import GenerateHistory from './components/GenerateHistory';

const Layout = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/generate" element={<QrCodeGeneretor />} />
        <Route path="/scan" element={<QrCodeScanner />} />
        <Route path="/generationistory" element={<GenerateHistory />} />
        <Route path="/scanhistory" element={<ScanHistory />} />
      </Routes>
    </div>
  );
};

export default Layout;
