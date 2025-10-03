import type { Metadata } from "next";
import Image from "next/image";
import JCBGallery from "@/components/JCBGallery";

export const metadata: Metadata = {
  title: "JCB Hire, Excavator Rental & Earthmoving in Prayagraj",
  description:
    "Book JCB and excavator services in Prayagraj for earthmoving, demolition, road construction, and land levelling. Fast response and reliable service.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Background */}
      <section className="relative min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100 overflow-hidden">
        {/* Background Construction Site */}
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/construction-site.svg"
            alt="Construction site background"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Floating JCB Image */}
        <div className="absolute top-20 right-10 opacity-20 hidden lg:block">
          <Image
            src="/jcb-excavator.svg"
            alt="JCB Excavator"
            width={300}
            height={200}
            className="animate-pulse"
          />
        </div>
        
        <div className="relative container mx-auto px-4 py-16 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Main Heading with Enhanced Styling */}
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                JCB Booking
              </span>
              <br />
              <span className="text-gray-800">in Prayagraj</span>
            </h1>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-orange-200 mb-12">
              <p className="text-2xl md:text-3xl text-gray-800 font-semibold mb-4">
                Professional Excavator & Earthmoving Services
              </p>
              <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
                Fast and reliable JCB hire for construction, demolition, road work, and land levelling. 
                Available 24/7 across Prayagraj and surrounding areas with experienced operators.
              </p>
              
              {/* Enhanced Call to Action */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                 <a 
                   href="tel:+919559394527" 
                   className="group bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-bold py-5 px-10 rounded-xl text-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-3"
                 >
                   <span className="text-2xl group-hover:animate-bounce">📞</span>
                   Call Now: +91-95593 94527
                 </a>
                 <a 
                   href="https://wa.me/919559394527?text=Hi%2C%20I%20need%20JCB%20service%20in%20Prayagraj" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="group bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-5 px-10 rounded-xl text-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-3"
                 >
                   <span className="text-2xl group-hover:animate-pulse">💬</span>
                   WhatsApp Booking
                 </a>
               </div>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="bg-white/70 rounded-lg p-4 shadow-md">
                <div className="text-3xl font-bold text-orange-600">24/7</div>
                <div className="text-sm text-gray-700">Available</div>
              </div>
              <div className="bg-white/70 rounded-lg p-4 shadow-md">
                <div className="text-3xl font-bold text-orange-600">5+</div>
                <div className="text-sm text-gray-700">Years Experience</div>
              </div>
              <div className="bg-white/70 rounded-lg p-4 shadow-md">
                <div className="text-3xl font-bold text-orange-600">100+</div>
                <div className="text-sm text-gray-700">Projects Done</div>
              </div>
              <div className="bg-white/70 rounded-lg p-4 shadow-md">
                <div className="text-3xl font-bold text-orange-600">★★★★★</div>
                <div className="text-sm text-gray-700">Customer Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Enhanced Cards */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-orange-600">JCB Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional earthmoving and construction services with modern JCB equipment and skilled operators
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Excavation Service */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-orange-200 transform hover:-translate-y-2">
              <div className="relative h-48 bg-gradient-to-br from-blue-50 to-blue-100">
                <Image
                  src="/service-excavation.svg"
                  alt="Excavation Work"
                  fill
                  className="object-cover p-4"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-orange-600 transition-colors">
                  Excavation Work
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Foundation digging, trenching, and site preparation for construction projects with precision and efficiency.
                </p>
                <div className="mt-4 flex items-center text-orange-600 font-semibold">
                  <span className="mr-2">→</span>
                  Book Now
                </div>
              </div>
            </div>
            
            {/* Demolition Service */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-orange-200 transform hover:-translate-y-2">
              <div className="relative h-48 bg-gradient-to-br from-red-50 to-red-100">
                <Image
                  src="/service-demolition.svg"
                  alt="Demolition Work"
                  fill
                  className="object-cover p-4"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-orange-600 transition-colors">
                  Demolition
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Safe and efficient building demolition and debris removal services with proper safety measures.
                </p>
                <div className="mt-4 flex items-center text-orange-600 font-semibold">
                  <span className="mr-2">→</span>
                  Book Now
                </div>
              </div>
            </div>
            
            {/* Road Construction Service */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-orange-200 transform hover:-translate-y-2">
              <div className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100">
                <Image
                  src="/service-road.svg"
                  alt="Road Construction"
                  fill
                  className="object-cover p-4"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-orange-600 transition-colors">
                  Road Construction
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Road building, repair, and maintenance with professional equipment and experienced operators.
                </p>
                <div className="mt-4 flex items-center text-orange-600 font-semibold">
                  <span className="mr-2">→</span>
                  Book Now
                </div>
              </div>
            </div>
            
            {/* Land Levelling Service */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-orange-200 transform hover:-translate-y-2">
              <div className="relative h-48 bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
                <div className="text-6xl">🌾</div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-orange-600 transition-colors">
                  Land Levelling
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Agricultural land preparation and levelling for farming and development projects.
                </p>
                <div className="mt-4 flex items-center text-orange-600 font-semibold">
                  <span className="mr-2">→</span>
                  Book Now
                </div>
              </div>
            </div>
            
            {/* Site Clearing Service */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-orange-200 transform hover:-translate-y-2">
              <div className="relative h-48 bg-gradient-to-br from-yellow-50 to-yellow-100 flex items-center justify-center">
                <div className="text-6xl">🏠</div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-orange-600 transition-colors">
                  Site Clearing
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Complete site preparation and clearing for new construction projects and developments.
                </p>
                <div className="mt-4 flex items-center text-orange-600 font-semibold">
                  <span className="mr-2">→</span>
                  Book Now
                </div>
              </div>
            </div>
            
            {/* Drainage Work Service */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-orange-200 transform hover:-translate-y-2">
              <div className="relative h-48 bg-gradient-to-br from-cyan-50 to-cyan-100 flex items-center justify-center">
                <div className="text-6xl">💧</div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-orange-600 transition-colors">
                  Drainage Work
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Drainage system installation and water management solutions for residential and commercial projects.
                </p>
                <div className="mt-4 flex items-center text-orange-600 font-semibold">
                  <span className="mr-2">→</span>
                  Book Now
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JCB Gallery Section */}
      <JCBGallery />

      {/* Coverage Area Section */}
      <section className="bg-gradient-to-r from-orange-50 via-yellow-50 to-orange-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Service <span className="text-orange-600">Coverage Area</span>
          </h2>
          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
            We provide JCB and excavator services across Prayagraj (Allahabad) and surrounding areas with quick response times
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              "Prayagraj City", "Naini", "Jhunsi", "Phaphamau",
              "Karchana", "Soraon", "Handia", "Meja"
            ].map((area, _) => (
              <div key={area} className="group bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100 hover:border-orange-300 transform hover:-translate-y-1">
                <div className="text-2xl mb-2">📍</div>
                <h3 className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                  {area}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Book Your <span className="text-orange-400">JCB?</span>
          </h2>
          <p className="text-xl mb-12 text-gray-300 max-w-2xl mx-auto">
            Get instant quotes and immediate service availability. Professional operators and competitive rates guaranteed.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
               <div className="text-4xl mb-4">📞</div>
               <h3 className="text-lg font-semibold mb-2 text-orange-400">Call Us</h3>
               <a href="tel:+919559394527" className="text-2xl font-bold hover:text-orange-300 transition-colors">+91-95593 94527</a>
               <p className="text-sm text-gray-400 mt-2">Available 24/7</p>
             </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="text-lg font-semibold mb-2 text-orange-400">Service Hours</h3>
              <p className="text-2xl font-bold">24/7 Service</p>
              <p className="text-sm text-gray-400 mt-2">Emergency available</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-lg font-semibold mb-2 text-orange-400">Location</h3>
              <p className="text-2xl font-bold">Prayagraj, UP</p>
              <p className="text-sm text-gray-400 mt-2">Serving all areas</p>
            </div>
          </div>
          
          <div className="bg-orange-600/20 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/30 max-w-4xl mx-auto">
            <p className="text-lg text-gray-300 leading-relaxed">
              <span className="text-orange-400 font-semibold">Professional JCB operators</span> • 
              <span className="text-orange-400 font-semibold"> Competitive rates</span> • 
              <span className="text-orange-400 font-semibold"> Immediate availability</span> • 
              <span className="text-orange-400 font-semibold"> All types of earthmoving equipment</span> • 
              <span className="text-orange-400 font-semibold"> Licensed and insured</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
