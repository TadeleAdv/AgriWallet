import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Wallet from './pages/Wallet';
import Transactions from './pages/Transactions';
import Subsidies from './pages/Subsidies';
import Loans from './pages/Loans';
import Savings from './pages/Savings';
import Education from './pages/Education';
import Support from './pages/Support';
import Profile from './pages/Profile';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/subsidies" element={<Subsidies />} />
          <Route path="/loans" element={<Loans />} />
          <Route path="/savings" element={<Savings />} />
          <Route path="/education" element={<Education />} />
          <Route path="/support" element={<Support />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;