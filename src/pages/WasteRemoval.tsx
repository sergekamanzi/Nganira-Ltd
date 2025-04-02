import React from 'react';
import { Trash2, Recycle, Truck, CheckCircle } from 'lucide-react';

const WasteRemoval = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section 
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80')"
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Professional Waste Removal Services</h1>
            <p className="text-xl">Efficient and environmentally responsible waste management solutions</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/*Service Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Comprehensive Waste Management</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 mb-4">
                Our waste removal services are designed to meet the diverse needs of both residential and commercial clients. We prioritize environmental responsibility while ensuring efficient and thorough waste management.
              </p>
              <p className="text-gray-600 mb-4">
                With our modern fleet and experienced team, we handle all types of waste removal projects, from regular collections to large-scale cleanouts.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Our Commitment</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Environmentally Responsible Disposal</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Efficient Collection Schedule</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Proper Waste Segregation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Recycling Programs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Our Waste Removal Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Trash2 className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Regular Collection</h3>
              <p className="text-gray-600">Scheduled waste collection services for homes and businesses.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Recycle className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Recycling Services</h3>
              <p className="text-gray-600">Sorting and processing recyclable materials for environmental sustainability.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Truck className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Bulk Waste Removal</h3>
              <p className="text-gray-600">Removal of large items and construction debris.</p>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Our Waste Management Process</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <ol className="space-y-6">
              <li className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">
                  1
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Assessment</h4>
                  <p className="text-gray-600">We evaluate your waste management needs and develop a customized collection plan.</p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">
                  2
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Collection</h4>
                  <p className="text-gray-600">Regular collection of waste according to the agreed schedule.</p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">
                  3
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Sorting</h4>
                  <p className="text-gray-600">Waste is sorted for recycling and proper disposal.</p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">
                  4
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Disposal</h4>
                  <p className="text-gray-600">Environmentally responsible disposal and recycling of collected materials.</p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WasteRemoval;