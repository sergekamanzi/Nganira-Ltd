import React from 'react';
import { Siren, Clock, Phone, Shield } from 'lucide-react';

const Emergency = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section 
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1590496794008-383c8070b257?auto=format&fit=crop&q=80')"
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">24/7 Emergency Services</h1>
            <p className="text-xl mb-8">Fast response when you need it most</p>
            <a 
              href="tel:555-123-4567"
              className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg hover:bg-blue-500 transition duration-300 inline-flex items-center"
            >
              <Phone className="mr-2" />
              Call Now: 555-123-4567
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Emergency Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Immediate Response to Emergency Situations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 mb-4">
                When emergencies strike, you need a reliable team that can respond quickly and effectively. Our emergency services team is available 24/7 to handle urgent sewage and waste management issues.
              </p>
              <p className="text-gray-600 mb-4">
                We understand that sewage emergencies can't wait, which is why we maintain a rapid response team ready to deploy at a moment's notice.
              </p>
            </div>
          </div>
        </div>

        {/* Emergency Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Emergency Services We Provide</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
              <h3 className="text-xl font-semibold mb-4">Sewage Backup</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Immediate cleanup</li>
                <li>• Blockage removal</li>
                <li>• Sanitization</li>
                <li>• Damage prevention</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
              <h3 className="text-xl font-semibold mb-4">Pipe Bursts</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Quick containment</li>
                <li>• Emergency repairs</li>
                <li>• Water extraction</li>
                <li>• System restoration</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
              <h3 className="text-xl font-semibold mb-4">Flooding</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Rapid water removal</li>
                <li>• Drainage clearing</li>
                <li>• Property protection</li>
                <li>• Preventive measures</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Emergency Process */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-8">Emergency Response Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">1. Emergency Call</h3>
              <p className="text-gray-600">Contact our 24/7 emergency line for immediate assistance</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">2. Quick Dispatch</h3>
              <p className="text-gray-600">Our nearest team is immediately dispatched to your location</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">3. Assessment</h3>
              <p className="text-gray-600">Quick evaluation of the situation and immediate action plan</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Siren className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">4. Resolution</h3>
              <p className="text-gray-600">Swift implementation of emergency solutions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emergency;