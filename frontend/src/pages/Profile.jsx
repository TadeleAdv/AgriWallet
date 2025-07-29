import { useState } from 'react';
import { Edit, Camera, MapPin, Phone, Crop } from 'lucide-react';
import { mockUser } from '../data/mockData';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: mockUser.name,
    phone: mockUser.phone,
    location: mockUser.location,
    farmSize: mockUser.farmSize,
    crops: mockUser.crops.join(', ')
  });

  const handleSave = () => {
    alert('Profile updated successfully');
    setIsEditing(false);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="container">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">My Profile</h1>
        <button 
          onClick={() => setIsEditing(!isEditing)}
          className="btn btn-primary flex items-center"
        >
          <Edit size={16} className="mr-2" />
          {isEditing ? 'Cancel' : 'Edit Profile'}
        </button>
      </div>

      <div className="grid grid-2">
        {/* Profile Info */}
        <div className="card">
          <div className="text-center mb-6">
            <div className="relative inline-block">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-2xl font-bold text-green-600 mx-auto">
                {mockUser.name.split(' ').map(n => n[0]).join('')}
              </div>
              {isEditing && (
                <button className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full">
                  <Camera size={16} />
                </button>
              )}
            </div>
            <h2 className="text-xl font-semibold mt-3">{mockUser.name}</h2>
            <p className="text-gray-600">Fayda ID: {mockUser.faydaId}</p>
          </div>

          {/* Personal Information */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              {isEditing ? (
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full p-3 border rounded-lg"
                />
              ) : (
                <p className="p-3 bg-gray-50 rounded-lg">{mockUser.name}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              {isEditing ? (
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full p-3 border rounded-lg"
                />
              ) : (
                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <Phone size={16} className="text-gray-600 mr-2" />
                  {mockUser.phone}
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
              {isEditing ? (
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  className="w-full p-3 border rounded-lg"
                />
              ) : (
                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <MapPin size={16} className="text-gray-600 mr-2" />
                  {mockUser.location}
                </div>
              )}
            </div>
          </div>

          {isEditing && (
            <button onClick={handleSave} className="btn btn-primary w-full mt-6">
              Save Changes
            </button>
          )}
        </div>

        {/* Farm Information */}
        <div className="card">
          <h3 className="text-lg font-semibold mb-4">Farm Information</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Farm Size</label>
              {isEditing ? (
                <input
                  type="text"
                  value={formData.farmSize}
                  onChange={(e) => handleInputChange('farmSize', e.target.value)}
                  className="w-full p-3 border rounded-lg"
                />
              ) : (
                <p className="p-3 bg-gray-50 rounded-lg">{mockUser.farmSize}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Crops Grown</label>
              {isEditing ? (
                <input
                  type="text"
                  value={formData.crops}
                  onChange={(e) => handleInputChange('crops', e.target.value)}
                  placeholder="e.g., Teff, Maize, Wheat"
                  className="w-full p-3 border rounded-lg"
                />
              ) : (
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex flex-wrap gap-2">
                    {mockUser.crops.map((crop, index) => (
                      <span key={index} className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                        <Crop size={12} className="inline mr-1" />
                        {crop}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Verification Status */}
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <h4 className="font-medium text-green-800 mb-2">Verification Status</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                <span className="text-sm text-green-700">Fayda ID Verified</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                <span className="text-sm text-green-700">Phone Number Verified</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                <span className="text-sm text-green-700">Farm Registration Verified</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Account Settings */}
      <div className="card mt-6">
        <h3 className="text-lg font-semibold mb-4">Account Settings</h3>
        <div className="grid grid-2">
          <div>
            <h4 className="font-medium mb-2">Language Preference</h4>
            <select className="w-full p-3 border rounded-lg">
              <option value="en">English</option>
              <option value="am">Amharic</option>
              <option value="or">Oromo</option>
              <option value="ti">Tigrinya</option>
            </select>
          </div>
          <div>
            <h4 className="font-medium mb-2">Notifications</h4>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" defaultChecked className="mr-2" />
                <span className="text-sm">SMS Notifications</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" defaultChecked className="mr-2" />
                <span className="text-sm">Transaction Alerts</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Marketing Updates</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;