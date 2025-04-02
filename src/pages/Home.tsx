import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Pipette as PipeWater, Trash2, Siren, Star, ChevronLeft, ChevronRight, Phone, Mail, MapPin } from 'lucide-react';

// Define testimonials array with 4 entries (you can edit the content here)
const testimonials = [
  {
    id: 1,
    name: "John Smith",
    role: "Business Owner",
    content: "ClearFlow Solutions provided exceptional service during our emergency. Their team was professional and efficient.",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Homeowner",
    content: "I've been using their services for years. Always reliable and thorough with their work.",
    rating: 5
  },
  {
    id: 3,
    name: "Mike Brown",
    role: "Property Manager",
    content: "The best in the business. Their preventive maintenance program has saved us thousands.",
    rating: 5
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Restaurant Owner",
    content: "Fast response time and excellent customer service. Highly recommended!",
    rating: 5
  }
];

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  // State for counters
  const [guaranteeCount, setGuaranteeCount] = useState(0);
  const [companiesCount, setCompaniesCount] = useState(0);
  const [customersCount, setCustomersCount] = useState(0);

  // Target values for counters
  const targetGuarantee = 98;
  const targetCompanies = 10;
  const targetCustomers = 50000;

  // Animation for counters using useEffect
  useEffect(() => {
    const animateCounter = (
      setCounter: React.Dispatch<React.SetStateAction<number>>, 
      target: number, 
      duration: number
    ) => {
      const increment = target / (duration / 50);
      let current = 0;
  
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounter(Math.floor(current));
      }, 50);
    };
  
    animateCounter(setGuaranteeCount, targetGuarantee, 2000);
    animateCounter(setCompaniesCount, targetCompanies, 2000);
    animateCounter(setCustomersCount, targetCustomers, 2000);
  }, []);

  // Automatic sliding for testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000); // Slide every 5 seconds

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-white" id="home">
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-white/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center bg-[url('/hero.jpg')] bg-cover bg-center">
          {/* Left Side: Text and Button */}
          <div className="md:w-1/2 text-left text-white z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 uppercase leading-snug">WELCOME TO NGANIRA SEWAGE SERVICE,Emergency Plumbing Solution</h2>
            <Link 
              to="/#contact"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md text-lg uppercase hover:bg-blue-500 transition duration-300"
            >
              Schedule an Appointment
            </Link>
          </div>
          {/* Right Side: Image */}
          <div className="md:w-1/2 mt-8 md:mt-0 z-10">
            <img 
              src="https://prosplum.1onestrong.com/wp-content/uploads/2023/01/Heros-02.png" 
              alt="Plumbing professionals" 
              className="w-120 h-85 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
        {/* Stats Section */}
        <div className="bg-white py-6 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-4xl font-bold text-blue-900">{guaranteeCount}%</p>
                <p className="text-black-600 text-lg">Guarantee</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-blue-900">{companiesCount}+</p>
                <p className="text-black-600 text-lg">Companies</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-blue-900">{customersCount.toLocaleString()}+</p>
                <p className="text-black-600 text-lg">Customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sewer Cleaning Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <PipeWater className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Sewage Hole Cleaning</h3>
                <p className="text-gray-600 mb-4">Professional cleaning services for all types of sewage systems. We ensure proper flow and prevent blockages.</p>
                <Link
                  to="/sewer-cleaning"
                  className="inline-block border-2 border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white transition duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Waste Removal Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Trash2 className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Waste Removal</h3>
                <p className="text-gray-600 mb-4">Efficient and environmentally friendly waste removal services for residential and commercial properties.</p>
                <Link
                  to="/waste-removal"
                  className="inline-block border-2 border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white transition duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Emergency Services Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Siren className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Emergency Services</h3>
                <p className="text-gray-600 mb-4">24/7 emergency response for urgent sewage and waste management issues. We're always here when you need us.</p>
                <Link
                  to="/emergency"
                  className="inline-block border-2 border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white transition duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">7+ Years of Experience in Sewage Solutions</h2>
              <p className="text-gray-600 mb-4">
                Nganira Sewage company has been providing top-tier sewage and waste management services to homes and businesses across the region. Our team of certified professionals brings expertise and dedication to every project.
              </p>
              <p className="text-gray-600 mb-4">
                We pride ourselves on using the latest technology and eco-friendly methods to deliver efficient and lasting solutions for all your waste management needs.
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6">
                <li>Certified and experienced professionals</li>
                <li>Latest equipment and technology</li>
                <li>Environmentally conscious methods</li>
                <li>Outstanding customer service</li>
              </ul>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80" 
                alt="Professional team" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative text-center">
            {/* Heading */}
            <h2 className="text-4xl font-bold text-white mb-8">Don't take our word for it. Take theirs.</h2>
            
            {/* Testimonial Content */}
            <div className="relative">
              {/* Stars */}
              <div className="flex justify-center text-yellow-400 mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-current" />
                ))}
              </div>
              
              {/* Testimonial Text */}
              <div className="text-white">
                <p className="text-xl md:text-2xl italic mb-4">
                  "{testimonials[currentTestimonial].content}"
                </p>
                <p className="text-lg font-semibold">
                  {testimonials[currentTestimonial].name}, {testimonials[currentTestimonial].role}
                </p>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>
              <button
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
              >
                <ChevronRight className="h-8 w-8" />
              </button>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`h-3 w-3 rounded-full ${
                    currentTestimonial === index ? 'bg-white' : 'bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Side: Contact Info */}
            <div className="flex flex-col justify-center">
              <h2 className="text-5xl font-bold text-black mb-4">Let's get in touch</h2>
              <p className="text-2xl text-black mb-8">Don't be afraid to say hello with us!</p>
              <div className="space-y-4">
                <p className="flex items-center space-x-3 text-gray-700">
                  <Phone className="h-6 w-6 text-black" />
                  <span>+ (2) 578-365-379</span>
                </p>
                <p className="flex items-center space-x-3 text-gray-700">
                  <Mail className="h-6 w-6 text-black" />
                  <span>hello@slabs.com</span>
                </p>
                <p className="flex items-center space-x-3 text-gray-700">
                  <MapPin className="h-6 w-6 text-black" />
                  <span>230 Norman Street New York, QC (USA) HBR 1A1</span>
                </p>
                <a
                  href="https://www.google.com/maps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  See on Google Map
                </a>
              </div>
            </div>

            {/* Right Side: Contact Form */}
            <div className="bg-black p-8 rounded-lg shadow-lg">
              <h3 className="text-3xl font-bold text-white mb-4">Contact</h3>
              <p className="text-gray-400 mb-6">
                Great! We're excited to hear from you and let's start something special together. Call us for any inquiry.
              </p>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="mt-1 block w-full rounded-md border-gray-600 bg-gray-800 text-white shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="mt-1 block w-full rounded-md border-gray-600 bg-gray-800 text-white shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      className="mt-1 block w-full rounded-md border-gray-600 bg-gray-800 text-white shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      className="mt-1 block w-full rounded-md border-gray-600 bg-gray-800 text-white shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300">Tell us about you're interested in</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-600 bg-gray-800 text-white shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white font-bold px-6 py-3 rounded-md hover:bg-blue-400 transition duration-300"
                >
                  Send to us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;