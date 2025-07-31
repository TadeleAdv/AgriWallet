import { BookOpen, Play, Clock } from 'lucide-react';
import { mockEducationalContent } from '../data/mockData';

const Education = () => {
  const categories = ['All', 'Farming', 'Finance', 'Technology', 'Marketing'];

  return (
    <div className="container">
      <h1 className="text-2xl font-bold mb-6">Educational Resources</h1>

      {/* Categories */}
      <div className="card mb-6">
        <div className="flex space-x-4">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-lg ${
                category === 'All' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Content */}
      <div className="card mb-6">
        <h2 className="text-lg font-semibold mb-4">Featured Content</h2>
        <div className="grid grid-2">
          <div className="p-4 border rounded-lg">
            <div className="flex items-center mb-2">
              <Play className="text-green-600 mr-2" size={20} />
              <span className="text-sm text-gray-600">Video Course</span>
            </div>
            <h3 className="font-medium mb-2">Smart Irrigation Techniques</h3>
            <p className="text-sm text-gray-600 mb-3">Learn water-efficient farming methods</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">45 min</span>
              <button className="btn btn-primary btn-sm">Watch Now</button>
            </div>
          </div>
          <div className="p-4 border rounded-lg">
            <div className="flex items-center mb-2">
              <BookOpen className="text-blue-600 mr-2" size={20} />
              <span className="text-sm text-gray-600">Article</span>
            </div>
            <h3 className="font-medium mb-2">Crop Rotation Benefits</h3>
            <p className="text-sm text-gray-600 mb-3">Maximize soil health and yields</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">12 min read</span>
              <button className="btn btn-primary btn-sm">Read Now</button>
            </div>
          </div>
        </div>
      </div>

      {/* Content Library */}
      <div className="card">
        <h2 className="text-lg font-semibold mb-4">Content Library</h2>
        <div className="space-y-4">
          {mockEducationalContent.map((content) => (
            <div key={content.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center">
                <BookOpen className="text-gray-600 mr-4" size={24} />
                <div>
                  <h3 className="font-medium">{content.title}</h3>
                  <p className="text-sm text-gray-600">{content.description}</p>
                  <div className="flex items-center mt-1">
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full mr-2">
                      {content.category}
                    </span>
                    <Clock size={12} className="text-gray-500 mr-1" />
                    <span className="text-xs text-gray-500">{content.duration}</span>
                  </div>
                </div>
              </div>
              <button className="btn btn-primary btn-sm">Access</button>
            </div>
          ))}
        </div>
      </div>

      {/* Learning Path */}
      <div className="card mt-6">
        <h2 className="text-lg font-semibold mb-4">Recommended Learning Path</h2>
        <div className="space-y-3">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3">
              1
            </div>
            <div>
              <p className="font-medium">Financial Literacy Basics</p>
              <p className="text-sm text-gray-600">Understanding savings and loans</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center text-sm font-medium mr-3">
              2
            </div>
            <div>
              <p className="font-medium">Modern Farming Techniques</p>
              <p className="text-sm text-gray-600">Improving crop yields</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center text-sm font-medium mr-3">
              3
            </div>
            <div>
              <p className="font-medium">Market Access & Pricing</p>
              <p className="text-sm text-gray-600">Selling your produce effectively</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;