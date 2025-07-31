import { useState } from 'react';
import { CreditCard, Calendar, DollarSign } from 'lucide-react';
import { mockLoans } from '../data/mockData';

const Loans = () => {
  const [showApplication, setShowApplication] = useState(false);
  const [loanAmount, setLoanAmount] = useState('');
  const [loanPurpose, setLoanPurpose] = useState('');

  const handleApplyLoan = () => {
    alert(`Loan application submitted for ${loanAmount} ETB`);
    setLoanAmount('');
    setLoanPurpose('');
    setShowApplication(false);
  };

  return (
    <div className="container">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Agricultural Loans</h1>
        <button 
          onClick={() => setShowApplication(true)}
          className="btn btn-primary"
        >
          Apply for Loan
        </button>
      </div>

      {/* Active Loans */}
      <div className="card mb-6">
        <h2 className="text-lg font-semibold mb-4">Active Loans</h2>
        {mockLoans.map((loan) => (
          <div key={loan.id} className="border rounded-lg p-4">
            <div className="grid grid-2 mb-4">
              <div>
                <p className="text-sm text-gray-600">Loan Amount</p>
                <p className="text-xl font-bold">{loan.amount.toLocaleString()} ETB</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Remaining Balance</p>
                <p className="text-xl font-bold text-red-600">{loan.remainingBalance.toLocaleString()} ETB</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Interest Rate</p>
                <p className="font-medium">{loan.interestRate}% per year</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Term</p>
                <p className="font-medium">{loan.term}</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Next Payment</p>
                <p className="font-medium">{loan.nextPayment}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Monthly Payment</p>
                <p className="font-medium">{loan.monthlyPayment} ETB</p>
              </div>
              <button className="btn btn-primary">Make Payment</button>
            </div>

            {/* Progress Bar */}
            <div className="mt-4">
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Loan Progress</span>
                <span>{Math.round((1 - loan.remainingBalance / loan.amount) * 100)}% paid</span>
              </div>
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${(1 - loan.remainingBalance / loan.amount) * 100}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Loan Options */}
      <div className="card mb-6">
        <h2 className="text-lg font-semibold mb-4">Available Loan Products</h2>
        <div className="grid grid-3">
          <div className="p-4 border rounded-lg">
            <CreditCard className="text-blue-600 mb-2" size={24} />
            <h3 className="font-medium">Seasonal Loan</h3>
            <p className="text-sm text-gray-600 mb-2">Up to 50,000 ETB</p>
            <p className="text-sm text-gray-600">12% interest rate</p>
          </div>
          <div className="p-4 border rounded-lg">
            <DollarSign className="text-green-600 mb-2" size={24} />
            <h3 className="font-medium">Equipment Loan</h3>
            <p className="text-sm text-gray-600 mb-2">Up to 100,000 ETB</p>
            <p className="text-sm text-gray-600">15% interest rate</p>
          </div>
          <div className="p-4 border rounded-lg">
            <Calendar className="text-orange-600 mb-2" size={24} />
            <h3 className="font-medium">Emergency Loan</h3>
            <p className="text-sm text-gray-600 mb-2">Up to 20,000 ETB</p>
            <p className="text-sm text-gray-600">18% interest rate</p>
          </div>
        </div>
      </div>

      {/* Loan Application Modal */}
      {showApplication && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h3 className="text-lg font-semibold mb-4">Apply for Loan</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Loan Amount (ETB)</label>
                <input
                  type="number"
                  placeholder="Enter amount"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                  className="w-full p-3 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Purpose</label>
                <select
                  value={loanPurpose}
                  onChange={(e) => setLoanPurpose(e.target.value)}
                  className="w-full p-3 border rounded-lg"
                >
                  <option value="">Select purpose</option>
                  <option value="seeds">Seeds Purchase</option>
                  <option value="fertilizer">Fertilizer</option>
                  <option value="equipment">Farm Equipment</option>
                  <option value="livestock">Livestock</option>
                </select>
              </div>
            </div>
            <div className="flex space-x-3 mt-6">
              <button onClick={handleApplyLoan} className="btn btn-primary flex-1">
                Submit Application
              </button>
              <button onClick={() => setShowApplication(false)} className="btn btn-secondary flex-1">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Eligibility Info */}
      <div className="card">
        <h2 className="text-lg font-semibold mb-4">Loan Eligibility</h2>
        <div className="space-y-2">
          <p className="text-sm">✓ Verified Fayda ID required</p>
          <p className="text-sm">✓ Minimum 6 months transaction history</p>
          <p className="text-sm">✓ Active farming operations</p>
          <p className="text-sm">✓ No outstanding loan defaults</p>
        </div>
      </div>
    </div>
  );
};

export default Loans;