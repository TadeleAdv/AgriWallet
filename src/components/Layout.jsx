import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Wallet, History, Gift, CreditCard, PiggyBank, BookOpen, HelpCircle, User, Bell, Menu, X } from 'lucide-react';
import { mockNotifications } from '../data/mockData';

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const unreadCount = mockNotifications.filter(n => !n.read).length;

  const navigation = [
    { name: 'Dashboard', href: '/', icon: Home },
    { name: 'Wallet', href: '/wallet', icon: Wallet },
    { name: 'Transactions', href: '/transactions', icon: History },
    { name: 'Subsidies', href: '/subsidies', icon: Gift },
    { name: 'Loans', href: '/loans', icon: CreditCard },
    { name: 'Savings', href: '/savings', icon: PiggyBank },
    { name: 'Education', href: '/education', icon: BookOpen },
    { name: 'Support', href: '/support', icon: HelpCircle },
    { name: 'Profile', href: '/profile', icon: User },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-25" onClick={() => setSidebarOpen(false)} />
          <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg">
            <div className="flex items-center justify-between p-4 border-b">
              <h1 className="text-xl font-bold text-green-600">AgriWallet</h1>
              <button onClick={() => setSidebarOpen(false)}>
                <X size={24} />
              </button>
            </div>
            <nav className="mt-4">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center px-4 py-3 text-sm font-medium ${
                      isActive ? 'bg-green-50 text-green-600 border-r-2 border-green-600' : 'text-gray-600 hover:bg-gray-50'
                    }`}
                    onClick={() => setSidebarOpen(false)}
                  >
                    <Icon size={20} className="mr-3" />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex flex-col flex-grow bg-white border-r border-gray-200">
          <div className="flex items-center px-4 py-6 border-b">
            <h1 className="text-xl font-bold text-green-600">🌾 AgriWallet</h1>
          </div>
          <nav className="mt-4 flex-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center px-4 py-3 text-sm font-medium ${
                    isActive ? 'bg-green-50 text-green-600 border-r-2 border-green-600' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon size={20} className="mr-3" />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top bar */}
        <div className="bg-white border-b border-gray-200 px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              className="lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu size={24} />
            </button>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Bell size={20} className="text-gray-600" />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {unreadCount}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="p-4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;