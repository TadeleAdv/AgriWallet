import { useState } from 'react';
import { Plus, Minus, Send } from 'lucide-react';
import { mockWallet, mockUser } from '../data/mockData';

const Wallet = () => {
  const [showAddFunds, setShowAddFunds] = useState(false);
  const [showWithdraw, setShowWithdraw] = useState(false);
  const [amount, setAmount] = useState('');

  const handleAddFunds = () => {
    alert(`Adding ${amount} ETB to wallet`);
    setAmount('');
    setShowAddFunds(false);
  };

  const handleWithdraw = () => {
    alert(`Withdrawing ${amount} ETB from wallet`);
    setAmount('');
    setShowWithdraw(false);
  };

  return (
    <div className="container">
      <h1 className="text-2xl font-bold mb-6">Digital Wallet</h1>

      {/* Wallet Card */}
      <div className="card bg-gradient-to-r from-green-500 to-green-600 text-white mb-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-green-100">Account Holder</p>
            <p className="text-xl font-semibold">{mockUser.name}</p>
            <p className="text-green-100 mt-4">Account Number</p>
            <p className="font-mono">{mockWallet.accountNumber}</p>
          </div>
          <div className="text-right">
            <p className="text-green-100">Balance</p>
            <p className="text-3xl font-bold">{mockWallet.balance.toLocaleString()}</p>
            <p className="text-green-100">{mockWallet.currency}</p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-3 mb-6">
        <button
          onClick={() => setShowAddFunds(true)}
          className="card flex items-center justify-center p-6 hover:bg-green-50 transition-colors"
        >
          <Plus className="text-green-600 mr-2" size={24} />
          <span className="font-medium">Add Funds</span>
        </button>

        <button
          onClick={() => setShowWithdraw(true)}
          className="card flex items-center justify-center p-6 hover:bg-red-50 transition-colors"
        >
          <Minus className="text-red-600 mr-2" size={24} />
          <span className="font-medium">Withdraw</span>
        </button>

        <button className="card flex items-center justify-center p-6 hover:bg-blue-50 transition-colors">
          <Send className="text-blue-600 mr-2" size={24} />
          <span className="font-medium">Transfer</span>
        </button>
      </div>

      {/* Add Funds Modal */}
      {showAddFunds && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h3 className="text-lg font-semibold mb-4">Add Funds</h3>
            <input
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full p-3 border rounded-lg mb-4"
            />
            <div className="flex space-x-3">
              <button onClick={handleAddFunds} className="btn btn-primary flex-1">
                Add Funds
              </button>
              <button onClick={() => setShowAddFunds(false)} className="btn btn-secondary flex-1">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Withdraw Modal */}
      {showWithdraw && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h3 className="text-lg font-semibold mb-4">Withdraw Funds</h3>
            <input
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full p-3 border rounded-lg mb-4"
            />
            <div className="flex space-x-3">
              <button onClick={handleWithdraw} className="btn btn-primary flex-1">
                Withdraw
              </button>
              <button onClick={() => setShowWithdraw(false)} className="btn btn-secondary flex-1">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Quick Stats */}
      <div className="card">
        <h2 className="text-lg font-semibold mb-4">Account Information</h2>
        <div className="grid grid-2">
          <div>
            <p className="text-sm text-gray-600">Account Type</p>
            <p className="font-medium">AgriWallet Digital Account</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Status</p>
            <p className="font-medium text-green-600">Active & Verified</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Linked Phone</p>
            <p className="font-medium">{mockUser.phone}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Location</p>
            <p className="font-medium">{mockUser.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;