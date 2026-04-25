import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer, Home, Process, Pricing, Support } from './components/PolDriveComponents';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/process" element={<Process />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/support" element={<Support />} />
            <Route path="/locations" element={<Support />} /> {/* Reusing Support for now */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
