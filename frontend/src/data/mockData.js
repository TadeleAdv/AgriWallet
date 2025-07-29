export const mockUser = {
  id: 'farmer_001',
  name: 'Abebe Kebede',
  faydaId: 'FYD123456789',
  phone: '+251911234567',
  location: 'Oromia, Adama',
  farmSize: '2.5 hectares',
  crops: ['Teff', 'Maize', 'Wheat'],
  profilePicture: '/api/placeholder/100/100'
};

export const mockWallet = {
  balance: 15750.50,
  currency: 'ETB',
  accountNumber: 'AGW001234567'
};

export const mockTransactions = [
  {
    id: 'txn_001',
    type: 'subsidy',
    amount: 5000,
    description: 'Government Seed Subsidy',
    date: '2024-01-15',
    status: 'completed'
  },
  {
    id: 'txn_002',
    type: 'purchase',
    amount: -1200,
    description: 'Fertilizer Purchase - Adama Agro',
    date: '2024-01-14',
    status: 'completed'
  },
  {
    id: 'txn_003',
    type: 'loan',
    amount: 10000,
    description: 'Agricultural Loan Disbursement',
    date: '2024-01-10',
    status: 'completed'
  },
  {
    id: 'txn_004',
    type: 'savings',
    amount: -2000,
    description: 'Savings Goal Contribution',
    date: '2024-01-08',
    status: 'completed'
  }
];

export const mockSubsidies = [
  {
    id: 'sub_001',
    name: 'Seed Subsidy Program',
    amount: 5000,
    status: 'received',
    date: '2024-01-15',
    description: 'Government subsidy for improved seeds'
  },
  {
    id: 'sub_002',
    name: 'Fertilizer Support',
    amount: 3000,
    status: 'pending',
    date: '2024-02-01',
    description: 'Fertilizer subsidy for smallholder farmers'
  }
];

export const mockLoans = [
  {
    id: 'loan_001',
    amount: 10000,
    interestRate: 12,
    term: '12 months',
    status: 'active',
    remainingBalance: 8500,
    nextPayment: '2024-02-15',
    monthlyPayment: 950
  }
];

export const mockSavingsGoals = [
  {
    id: 'goal_001',
    name: 'New Irrigation System',
    targetAmount: 25000,
    currentAmount: 8500,
    deadline: '2024-06-30'
  },
  {
    id: 'goal_002',
    name: 'Harvest Equipment',
    targetAmount: 15000,
    currentAmount: 3200,
    deadline: '2024-08-15'
  }
];

export const mockNotifications = [
  {
    id: 'notif_001',
    title: 'Subsidy Received',
    message: 'Your seed subsidy of 5,000 ETB has been credited',
    date: '2024-01-15',
    read: false,
    type: 'success'
  },
  {
    id: 'notif_002',
    title: 'Loan Payment Due',
    message: 'Your loan payment of 950 ETB is due on Feb 15',
    date: '2024-01-12',
    read: true,
    type: 'warning'
  }
];

export const mockEducationalContent = [
  {
    id: 'edu_001',
    title: 'Modern Farming Techniques',
    category: 'Farming',
    duration: '15 min read',
    description: 'Learn about sustainable farming practices'
  },
  {
    id: 'edu_002',
    title: 'Financial Planning for Farmers',
    category: 'Finance',
    duration: '10 min read',
    description: 'How to manage your agricultural finances'
  }
];

export const mockAgents = [
  {
    id: 'agent_001',
    name: 'Desta Tadesse',
    role: 'Extension Officer',
    location: 'Adama District',
    phone: '+251911987654',
    specialization: 'Crop Management'
  }
];