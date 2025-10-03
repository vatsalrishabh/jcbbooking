import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { allLocations, services } from '@/data/locations';
import Image from 'next/image';
import Link from 'next/link';
import StructuredData from '@/components/StructuredData';

interface ServiceLocationPageProps {
  params: {
    service: string;
    location: string;
  };
}

// Generate static params for all service-location combinations
export async function generateStaticParams() {
  const params = [];
  
  for (const service of services) {
    for (const location of allLocations) {
      params.push({
        service: service.slug,
        location: location.slug,
      });
    }
  }
  
  return params;
}

// Generate metadata for SEO
export async function generateMetadata({ params }: ServiceLocationPageProps): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.service);
  const location = allLocations.find((l) => l.slug === params.location);
  
  if (!service || !location) {
    return {
      title: 'Service Not Found',
    };
  }

  const locationName = location.type === 'area' ? `${location.name}, Prayagraj` : location.name;
  const title = `${service.name} in ${locationName} | Professional JCB Services`;
  const description = `Professional ${service.name.toLowerCase()} in ${locationName}. Expert JCB operators, modern equipment, competitive rates. Call 95593 94527 for immediate booking.`;

  return {
    title,
    description,
    keywords: [
      ...service.keywords.map(k => `${k} ${location.name.toLowerCase()}`),
      ...location.keywords,
      `${service.name.toLowerCase()} ${location.name.toLowerCase()}`,
      'jcb rental',
      'construction equipment',
      'professional services'
    ].join(', '),
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'en_IN',
      siteName: 'JCB Booking Services',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: `https://jcbbooking.com/services/${service.slug}/${location.slug}`,
    },
  };
}

export default function ServiceLocationPage({ params }: ServiceLocationPageProps) {
  const service = services.find((s) => s.slug === params.service);
  const location = allLocations.find((l) => l.slug === params.location);

  if (!service || !location) {
    notFound();
  }

  const locationName = location.type === 'area' ? `${location.name}, Prayagraj` : location.name;

  const serviceDetails = {
    'excavation': {
      icon: '🏗️',
      fullDescription: 'Professional excavation services using modern JCB excavators for all types of digging, foundation work, and site preparation.',
      features: ['Foundation Excavation', 'Basement Digging', 'Trenching', 'Site Preparation', 'Utility Installation', 'Drainage Work'],
      equipment: ['JCB 3DX', 'JCB 4DX', 'Mini Excavators', 'Track Excavators'],
      applications: ['Residential Construction', 'Commercial Projects', 'Infrastructure Development', 'Utility Work']
    },
    'road-construction': {
      icon: '🛣️',
      fullDescription: 'Expert road construction services with specialized JCB equipment for building, repairing, and maintaining roads and highways.',
      features: ['Road Building', 'Surface Repair', 'Highway Construction', 'Path Creation', 'Asphalt Work', 'Concrete Roads'],
      equipment: ['JCB Road Grader', 'JCB Compactor', 'JCB Loader', 'Road Roller'],
      applications: ['Highway Construction', 'City Roads', 'Rural Roads', 'Private Roads']
    },
    'demolition': {
      icon: '🏚️',
      fullDescription: 'Safe and efficient demolition services using specialized JCB equipment for controlled building and structure removal.',
      features: ['Building Demolition', 'Structure Removal', 'Selective Demolition', 'Site Clearance', 'Debris Removal', 'Waste Management'],
      equipment: ['JCB Demolition Excavator', 'Hydraulic Breaker', 'Demolition Attachments', 'Safety Equipment'],
      applications: ['Residential Demolition', 'Commercial Demolition', 'Industrial Demolition', 'Renovation Projects']
    },
    'earthmoving': {
      icon: '⛰️',
      fullDescription: 'Comprehensive earthmoving services for land preparation, grading, and landscaping using powerful JCB equipment.',
      features: ['Land Leveling', 'Soil Moving', 'Grading', 'Cut and Fill', 'Slope Preparation', 'Landscaping'],
      equipment: ['JCB Backhoe Loader', 'JCB Wheel Loader', 'JCB Dozer', 'Grading Equipment'],
      applications: ['Site Development', 'Landscaping Projects', 'Agricultural Land Preparation', 'Industrial Sites']
    },
    'equipment-rental': {
      icon: '🚜',
      fullDescription: 'Complete construction equipment rental services with a wide range of JCB machinery for all construction needs.',
      features: ['Daily Rental', 'Weekly Rental', 'Monthly Rental', 'Operator Included', 'Maintenance Included', 'Fuel Included'],
      equipment: ['All JCB Models', 'Excavators', 'Loaders', 'Compactors', 'Specialized Attachments'],
      applications: ['Construction Projects', 'Infrastructure Development', 'Emergency Services', 'Temporary Projects']
    }
  };

  const currentService = serviceDetails[params.service as keyof typeof serviceDetails] || serviceDetails['excavation'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <StructuredData type="service" location={locationName} service={service.name} />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6">{currentService.icon}</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {service.name} in <span className="text-yellow-300">{locationName}</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              {currentService.fullDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:9559394527" 
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105"
              >
                📞 Call Now: 95593 94527
              </a>
              <a 
                href={`https://wa.me/919559394527?text=Hi, I need ${service.name.toLowerCase()} services in ${locationName}`}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105"
              >
                💬 WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Our <span className="text-blue-600">{service.name}</span> Features in {locationName}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {currentService.features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  <span className="text-green-500 text-2xl mr-3">✓</span>
                  <h3 className="text-lg font-bold text-gray-900">{feature}</h3>
                </div>
                <p className="text-gray-600">
                  Professional {feature.toLowerCase()} services in {locationName} with modern JCB equipment and expert operators.
                </p>
              </div>
            ))}
          </div>

          {/* Equipment Section */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
              Equipment We Use for {service.name} in {locationName}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentService.equipment.map((equipment, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-md text-center">
                  <div className="text-3xl mb-2">🚜</div>
                  <h4 className="font-semibold text-gray-800">{equipment}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Applications Section */}
          <div className="bg-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
              Applications of {service.name} in {locationName}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentService.applications.map((application, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-md text-center">
                  <div className="text-3xl mb-2">🏗️</div>
                  <h4 className="font-semibold text-gray-800">{application}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Our {service.name} Process in {locationName}
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Contact Us", desc: "Call or WhatsApp for immediate response" },
              { step: "2", title: "Site Assessment", desc: "Free site visit and requirement analysis" },
              { step: "3", title: "Equipment Deployment", desc: "Quick deployment of appropriate JCB equipment" },
              { step: "4", title: "Professional Execution", desc: "Expert completion with quality assurance" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{process.title}</h3>
                <p className="text-gray-600">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Competitive Pricing for {service.name} in {locationName}
          </h2>
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Hourly Rate</h3>
                <div className="text-3xl font-bold text-blue-600 mb-2">₹800-1200</div>
                <p className="text-gray-600">Per hour with operator</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Daily Rate</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">₹6000-8000</div>
                <p className="text-gray-600">8-hour shift included</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Monthly Rate</h3>
                <div className="text-3xl font-bold text-purple-600 mb-2">₹1.5L-2L</div>
                <p className="text-gray-600">Best value for long projects</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">*Prices may vary based on project requirements and equipment type</p>
              <a 
                href="tel:9559394527" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold transition-colors"
              >
                Get Custom Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready for {service.name} in {locationName}?
          </h2>
          <p className="text-xl mb-8">
            Contact us now for professional {service.name.toLowerCase()} services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:9559394527" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              📞 Call: 95593 94527
            </a>
            <a 
              href={`https://wa.me/919559394527?text=Hi, I need ${service.name.toLowerCase()} services in ${locationName}`}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
            >
              💬 WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Other Services in {locationName}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services
              .filter(s => s.slug !== service.slug)
              .map((relatedService) => (
                <Link 
                  key={relatedService.slug} 
                  href={`/services/${relatedService.slug}/${location.slug}`}
                  className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:bg-blue-50 text-center"
                >
                  <h3 className="font-semibold text-gray-800 hover:text-blue-600">
                    {relatedService.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Available in {locationName}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}