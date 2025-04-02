import { Pipette as PipeWater, CheckCircle, AlertTriangle } from 'lucide-react';

const SewerCleaning = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section 
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&q=80')"
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Professional Sewer Cleaning Services</h1>
            <p className="text-xl">Keeping your sewage system running smoothly and efficiently</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Service Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Comprehensive Sewer Cleaning Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 mb-4">
                Our professional sewer cleaning service uses state-of-the-art equipment and techniques to ensure your sewage system operates at peak efficiency. We handle everything from routine maintenance to emergency blockage removal.
              </p>
              <p className="text-gray-600 mb-4">
                With our experienced team, you can rest assured that your sewer system will be thoroughly cleaned and maintained, preventing costly repairs and unexpected breakdowns.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>24/7 Emergency Service Available</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Licensed and Insured Professionals</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Latest Equipment and Technology</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Competitive Pricing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Our Cleaning Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <PipeWater className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Routine Maintenance</h3>
              <p className="text-gray-600">Regular cleaning and inspection to prevent blockages and maintain system efficiency.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <AlertTriangle className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Emergency Cleaning</h3>
              <p className="text-gray-600">Quick response to blocked or overflowing sewers with immediate solutions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <PipeWater className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Deep Cleaning</h3>
              <p className="text-gray-600">Thorough cleaning of main lines and lateral connections using advanced equipment.</p>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Our Cleaning Process</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <ol className="space-y-6">
              <li className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">
                  1
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Initial Inspection</h4>
                  <p className="text-gray-600">We thoroughly inspect your sewer system using advanced camera equipment to identify any issues.</p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">
                  2
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Assessment</h4>
                  <p className="text-gray-600">Our team analyzes the inspection results and develops a comprehensive cleaning plan.</p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">
                  3
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Cleaning</h4>
                  <p className="text-gray-600">We use appropriate cleaning methods and equipment to clear your sewer system thoroughly.</p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">
                  4
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Final Inspection</h4>
                  <p className="text-gray-600">A final camera inspection ensures the cleaning was successful and your system is functioning properly.</p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SewerCleaning;