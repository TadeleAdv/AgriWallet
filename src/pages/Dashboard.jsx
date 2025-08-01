import { Wallet, TrendingUp, Gift, Bell } from 'lucide-react';
import { mockUser, mockWallet, mockTransactions, mockNotifications, mockSavingsGoals } from '../data/mockData';

const Dashboard = () => {
  const recentTransactions = mockTransactions.slice(0, 3);
  const totalSavings = mockSavingsGoals.reduce((sum, goal) => sum + goal.currentAmount, 0);

  return (
    <div className="container">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Welcome back, {mockUser.name}</h1>
        <p className="text-gray-600">Fayda ID: {mockUser.faydaId}</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-3 mb-6">
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Wallet Balance</p>
              <p className="text-2xl font-bold text-green-600">{mockWallet.balance.toLocaleString()} {mockWallet.currency}</p>
            </div>
            <Wallet className="text-green-600" size={32} />
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Savings</p>
              <p className="text-2xl font-bold text-blue-600">{totalSavings.toLocaleString()} ETB</p>
            </div>
            <TrendingUp className="text-blue-600" size={32} />
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Active Subsidies</p>
              <p className="text-2xl font-bold text-orange-600">2</p>
            </div>
            <Gift className="text-orange-600" size={32} />
          </div>
        </div>
      </div>

      <div className="grid grid-2">
        {/* Recent Transactions */}
        <div className="card">
          <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
          <div className="space-y-4">
            {recentTransactions.map((transaction) => (
              <div key={transaction.id} className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{transaction.description}</p>
                  <p className="text-sm text-gray-600">{transaction.date}</p>
                </div>
                <span className={`font-semibold ${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {transaction.amount > 0 ? '+' : ''}{transaction.amount.toLocaleString()} ETB
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Notifications */}
        <div className="card">
          <div className="flex items-center mb-4">
            <Bell size={20} className="mr-2" />
            <h2 className="text-lg font-semibold">Recent Notifications</h2>
          </div>
          <div className="space-y-4">
            {mockNotifications.slice(0, 3).map((notification) => (
              <div key={notification.id} className={`p-3 rounded-lg ${notification.read ? 'bg-gray-50' : 'bg-blue-50'}`}>
                <p className="font-medium">{notification.title}</p>
                <p className="text-sm text-gray-600">{notification.message}</p>
                <p className="text-xs text-gray-500 mt-1">{notification.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;