import { useState } from 'react';
import { Filter, Download } from 'lucide-react';
import { mockTransactions } from '../data/mockData';

const Transactions = () => {
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('date');

  const filteredTransactions = mockTransactions.filter(transaction => {
    if (filter === 'all') return true;
    return transaction.type === filter;
  });

  const getTransactionIcon = (type) => {
    switch (type) {
      case 'subsidy': return '🎁';
      case 'loan': return '💰';
      case 'purchase': return '🛒';
      case 'savings': return '🏦';
      default: return '💳';
    }
  };

  const getTransactionColor = (amount) => {
    return amount > 0 ? 'text-green-600' : 'text-red-600';
  };

  return (
    <div className="container">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Transaction History</h1>
        <button className="btn btn-primary flex items-center">
          <Download size={16} className="mr-2" />
          Export
        </button>
      </div>

      {/* Filters */}
      <div className="card mb-6">
        <div className="flex items-center space-x-4">
          <Filter size={20} className="text-gray-600" />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="p-2 border rounded-lg"
          >
            <option value="all">All Transactions</option>
            <option value="subsidy">Subsidies</option>
            <option value="loan">Loans</option>
            <option value="purchase">Purchases</option>
            <option value="savings">Savings</option>
          </select>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="p-2 border rounded-lg"
          >
            <option value="date">Sort by Date</option>
            <option value="amount">Sort by Amount</option>
            <option value="type">Sort by Type</option>
          </select>
        </div>
      </div>

      {/* Transaction List */}
      <div className="card">
        <div className="space-y-4">
          {filteredTransactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between p-4 border-b last:border-b-0">
              <div className="flex items-center">
                <div className="text-2xl mr-4">
                  {getTransactionIcon(transaction.type)}
                </div>
                <div>
                  <p className="font-medium">{transaction.description}</p>
                  <p className="text-sm text-gray-600">{transaction.date}</p>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    transaction.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {transaction.status}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <p className={`text-lg font-semibold ${getTransactionColor(transaction.amount)}`}>
                  {transaction.amount > 0 ? '+' : ''}{transaction.amount.toLocaleString()} ETB
                </p>
                <p className="text-sm text-gray-600 capitalize">{transaction.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Summary */}
      <div className="grid grid-2 mt-6">
        <div className="card">
          <h3 className="font-semibold mb-2">Total Income</h3>
          <p className="text-2xl font-bold text-green-600">
            +{mockTransactions.filter(t => t.amount > 0).reduce((sum, t) => sum + t.amount, 0).toLocaleString()} ETB
          </p>
        </div>
        <div className="card">
          <h3 className="font-semibold mb-2">Total Expenses</h3>
          <p className="text-2xl font-bold text-red-600">
            {mockTransactions.filter(t => t.amount < 0).reduce((sum, t) => sum + t.amount, 0).toLocaleString()} ETB
          </p>
        </div>
      </div>
    </div>
  );
};

export default Transactions;