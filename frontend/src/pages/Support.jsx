import { useState } from 'react';
import { Phone, MessageCircle, Mail, User } from 'lucide-react';
import { mockAgents } from '../data/mockData';

const Support = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');

  const handleSendMessage = () => {
    alert(`Message sent: ${subject}`);
    setMessage('');
    setSubject('');
    setShowContactForm(false);
  };

  const faqItems = [
    {
      question: "How do I apply for a government subsidy?",
      answer: "Navigate to the Subsidies section and click 'Apply for New Subsidy'. Select the program you're eligible for and follow the application steps."
    },
    {
      question: "What documents do I need for loan application?",
      answer: "You need your Fayda ID, farm registration documents, and proof of farming activities. All documents can be uploaded digitally."
    },
    {
      question: "How long does subsidy approval take?",
      answer: "Government subsidies typically take 7-14 business days for approval after all required documents are submitted."
    },
    {
      question: "Can I withdraw money from my wallet?",
      answer: "Yes, you can withdraw funds to your bank account or mobile money. Go to Wallet > Withdraw and follow the instructions."
    }
  ];

  return (
    <div className="container">
      <h1 className="text-2xl font-bold mb-6">Support & Help</h1>

      {/* Quick Actions */}
      <div className="grid grid-3 mb-6">
        <button 
          onClick={() => setShowContactForm(true)}
          className="card flex items-center justify-center p-6 hover:bg-blue-50 transition-colors"
        >
          <MessageCircle className="text-blue-600 mr-2" size={24} />
          <span className="font-medium">Send Message</span>
        </button>

        <button className="card flex items-center justify-center p-6 hover:bg-green-50 transition-colors">
          <Phone className="text-green-600 mr-2" size={24} />
          <span className="font-medium">Call Support</span>
        </button>

        <button className="card flex items-center justify-center p-6 hover:bg-orange-50 transition-colors">
          <Mail className="text-orange-600 mr-2" size={24} />
          <span className="font-medium">Email Us</span>
        </button>
      </div>

      {/* Extension Officers */}
      <div className="card mb-6">
        <h2 className="text-lg font-semibold mb-4">Local Extension Officers</h2>
        <div className="space-y-4">
          {mockAgents.map((agent) => (
            <div key={agent.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center">
                <User className="text-gray-600 mr-4" size={24} />
                <div>
                  <h3 className="font-medium">{agent.name}</h3>
                  <p className="text-sm text-gray-600">{agent.role} - {agent.location}</p>
                  <p className="text-sm text-gray-600">Specialization: {agent.specialization}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">Phone</p>
                <p className="font-medium">{agent.phone}</p>
                <button className="btn btn-primary btn-sm mt-2">Contact</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="card">
        <h2 className="text-lg font-semibold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="border-b pb-4 last:border-b-0">
              <h3 className="font-medium mb-2">{item.question}</h3>
              <p className="text-sm text-gray-600">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h3 className="text-lg font-semibold mb-4">Send Message</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Subject</label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full p-3 border rounded-lg"
                >
                  <option value="">Select subject</option>
                  <option value="technical">Technical Issue</option>
                  <option value="subsidy">Subsidy Question</option>
                  <option value="loan">Loan Support</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  placeholder="Describe your issue or question..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-3 border rounded-lg h-32 resize-none"
                />
              </div>
            </div>
            <div className="flex space-x-3 mt-6">
              <button onClick={handleSendMessage} className="btn btn-primary flex-1">
                Send Message
              </button>
              <button onClick={() => setShowContactForm(false)} className="btn btn-secondary flex-1">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Emergency Contact */}
      <div className="card mt-6 bg-red-50 border-red-200">
        <h2 className="text-lg font-semibold text-red-800 mb-2">Emergency Support</h2>
        <p className="text-sm text-red-700 mb-3">For urgent issues with your account or transactions</p>
        <div className="flex items-center">
          <Phone className="text-red-600 mr-2" size={16} />
          <span className="font-medium text-red-800">+251-911-AGRI-HELP</span>
        </div>
      </div>
    </div>
  );
};

export default Support;