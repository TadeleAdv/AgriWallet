import { Gift, Clock, CheckCircle } from 'lucide-react';
import { mockSubsidies } from '../data/mockData';

const Subsidies = () => {
  const getStatusIcon = (status) => {
    switch (status) {
      case 'received': return <CheckCircle className="text-green-600" size={20} />;
      case 'pending': return <Clock className="text-orange-600" size={20} />;
      default: return <Gift className="text-gray-600" size={20} />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'received': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="container">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Government Subsidies</h1>
        <button className="btn btn-primary">Apply for New Subsidy</button>
      </div>

      {/* Available Subsidies */}
      <div className="card mb-6">
        <h2 className="text-lg font-semibold mb-4">Available Programs</h2>
        <div className="grid grid-2">
          <div className="p-4 border rounded-lg">
            <h3 className="font-medium">Improved Seeds Program</h3>
            <p className="text-sm text-gray-600 mb-2">Up to 5,000 ETB for certified seeds</p>
            <button className="btn btn-primary btn-sm">Apply Now</button>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-medium">Fertilizer Support</h3>
            <p className="text-sm text-gray-600 mb-2">Up to 3,000 ETB for organic fertilizers</p>
            <button className="btn btn-primary btn-sm">Apply Now</button>
          </div>
        </div>
      </div>

      {/* My Subsidies */}
      <div className="card">
        <h2 className="text-lg font-semibold mb-4">My Subsidies</h2>
        <div className="space-y-4">
          {mockSubsidies.map((subsidy) => (
            <div key={subsidy.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center">
                <div className="mr-4">
                  {getStatusIcon(subsidy.status)}
                </div>
                <div>
                  <h3 className="font-medium">{subsidy.name}</h3>
                  <p className="text-sm text-gray-600">{subsidy.description}</p>
                  <p className="text-sm text-gray-500">Applied: {subsidy.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold">{subsidy.amount.toLocaleString()} ETB</p>
                <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(subsidy.status)}`}>
                  {subsidy.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Subsidy Guidelines */}
      <div className="card mt-6">
        <h2 className="text-lg font-semibold mb-4">Subsidy Guidelines</h2>
        <div className="space-y-3">
          <div className="flex items-start">
            <CheckCircle className="text-green-600 mr-2 mt-1" size={16} />
            <p className="text-sm">Must be a verified farmer with Fayda ID</p>
          </div>
          <div className="flex items-start">
            <CheckCircle className="text-green-600 mr-2 mt-1" size={16} />
            <p className="text-sm">Farm size must be between 0.5 - 5 hectares</p>
          </div>
          <div className="flex items-start">
            <CheckCircle className="text-green-600 mr-2 mt-1" size={16} />
            <p className="text-sm">Subsidies can only be used at approved merchants</p>
          </div>
          <div className="flex items-start">
            <CheckCircle className="text-green-600 mr-2 mt-1" size={16} />
            <p className="text-sm">Maximum 2 subsidies per farming season</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subsidies;