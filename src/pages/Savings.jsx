import { useState } from 'react';
import { PiggyBank, Plus, Target } from 'lucide-react';
import { mockSavingsGoals } from '../data/mockData';

const Savings = () => {
  const [showNewGoal, setShowNewGoal] = useState(false);
  const [showContribute, setShowContribute] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState(null);
  const [goalName, setGoalName] = useState('');
  const [targetAmount, setTargetAmount] = useState('');
  const [deadline, setDeadline] = useState('');
  const [contributionAmount, setContributionAmount] = useState('');

  const handleCreateGoal = () => {
    alert(`Created savings goal: ${goalName} for ${targetAmount} ETB`);
    setGoalName('');
    setTargetAmount('');
    setDeadline('');
    setShowNewGoal(false);
  };

  const handleContribute = () => {
    alert(`Added ${contributionAmount} ETB to ${selectedGoal.name}`);
    setContributionAmount('');
    setShowContribute(false);
    setSelectedGoal(null);
  };

  const getProgressPercentage = (current, target) => {
    return Math.min((current / target) * 100, 100);
  };

  return (
    <div className="container">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Savings Goals</h1>
        <button 
          onClick={() => setShowNewGoal(true)}
          className="btn btn-primary flex items-center"
        >
          <Plus size={16} className="mr-2" />
          New Goal
        </button>
      </div>

      {/* Savings Overview */}
      <div className="card mb-6">
        <div className="flex items-center mb-4">
          <PiggyBank className="text-blue-600 mr-2" size={24} />
          <h2 className="text-lg font-semibold">Savings Overview</h2>
        </div>
        <div className="grid grid-3">
          <div>
            <p className="text-sm text-gray-600">Total Saved</p>
            <p className="text-2xl font-bold text-blue-600">
              {mockSavingsGoals.reduce((sum, goal) => sum + goal.currentAmount, 0).toLocaleString()} ETB
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Total Target</p>
            <p className="text-2xl font-bold text-gray-900">
              {mockSavingsGoals.reduce((sum, goal) => sum + goal.targetAmount, 0).toLocaleString()} ETB
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Active Goals</p>
            <p className="text-2xl font-bold text-green-600">{mockSavingsGoals.length}</p>
          </div>
        </div>
      </div>

      {/* Savings Goals */}
      <div className="space-y-4">
        {mockSavingsGoals.map((goal) => {
          const progress = getProgressPercentage(goal.currentAmount, goal.targetAmount);
          const daysLeft = Math.ceil((new Date(goal.deadline) - new Date()) / (1000 * 60 * 60 * 24));
          
          return (
            <div key={goal.id} className="card">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold">{goal.name}</h3>
                  <p className="text-sm text-gray-600">Target: {goal.deadline}</p>
                  <p className="text-sm text-gray-600">{daysLeft} days remaining</p>
                </div>
                <button 
                  onClick={() => {
                    setSelectedGoal(goal);
                    setShowContribute(true);
                  }}
                  className="btn btn-primary btn-sm"
                >
                  Contribute
                </button>
              </div>

              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>{goal.currentAmount.toLocaleString()} ETB saved</span>
                  <span>{goal.targetAmount.toLocaleString()} ETB target</span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <p className="text-sm text-gray-600 mt-1">{progress.toFixed(1)}% complete</p>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-600">Remaining</p>
                  <p className="font-semibold">{(goal.targetAmount - goal.currentAmount).toLocaleString()} ETB</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Monthly needed</p>
                  <p className="font-semibold">
                    {Math.ceil((goal.targetAmount - goal.currentAmount) / Math.max(1, Math.ceil(daysLeft / 30))).toLocaleString()} ETB
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* New Goal Modal */}
      {showNewGoal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h3 className="text-lg font-semibold mb-4">Create New Savings Goal</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Goal Name</label>
                <input
                  type="text"
                  placeholder="e.g., New Tractor"
                  value={goalName}
                  onChange={(e) => setGoalName(e.target.value)}
                  className="w-full p-3 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Target Amount (ETB)</label>
                <input
                  type="number"
                  placeholder="Enter target amount"
                  value={targetAmount}
                  onChange={(e) => setTargetAmount(e.target.value)}
                  className="w-full p-3 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Target Date</label>
                <input
                  type="date"
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                  className="w-full p-3 border rounded-lg"
                />
              </div>
            </div>
            <div className="flex space-x-3 mt-6">
              <button onClick={handleCreateGoal} className="btn btn-primary flex-1">
                Create Goal
              </button>
              <button onClick={() => setShowNewGoal(false)} className="btn btn-secondary flex-1">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Contribute Modal */}
      {showContribute && selectedGoal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h3 className="text-lg font-semibold mb-4">Contribute to {selectedGoal.name}</h3>
            <div className="mb-4">
              <p className="text-sm text-gray-600">Current: {selectedGoal.currentAmount.toLocaleString()} ETB</p>
              <p className="text-sm text-gray-600">Target: {selectedGoal.targetAmount.toLocaleString()} ETB</p>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Contribution Amount (ETB)</label>
              <input
                type="number"
                placeholder="Enter amount"
                value={contributionAmount}
                onChange={(e) => setContributionAmount(e.target.value)}
                className="w-full p-3 border rounded-lg"
              />
            </div>
            <div className="flex space-x-3 mt-6">
              <button onClick={handleContribute} className="btn btn-primary flex-1">
                Contribute
              </button>
              <button onClick={() => setShowContribute(false)} className="btn btn-secondary flex-1">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Savings;