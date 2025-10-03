import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { allLocations } from '@/data/locations';
import Link from 'next/link';
import StructuredData from '@/components/StructuredData';

interface LocationPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all locations
export async function generateStaticParams() {
  return allLocations.map((location) => ({
    slug: location.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = allLocations.find((loc) => loc.slug === slug);
  
  if (!location) {
    return {
      title: 'Location Not Found',
    };
  }

  const title = `JCB Rental Services in ${location.name} | Professional Construction Equipment`;
  const description = `Professional JCB rental and construction equipment services in ${location.name}. ${location.description}. Call 95593 94527 for immediate booking.`;

  return {
    title,
    description,
    keywords: [
      ...location.keywords,
      `jcb rental ${location.name.toLowerCase()}`,
      `construction equipment ${location.name.toLowerCase()}`,
      `excavator hire ${location.name.toLowerCase()}`,
      'jcb booking',
      'earthmoving services',
      'demolition services'
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
      canonical: `https://jcbbooking.com/location/${location.slug}`,
    },
  };
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { slug } = await params;
  const location = allLocations.find((loc) => loc.slug === slug);

  if (!location) {
    notFound();
  }

  const isArea = location.type === 'area';
  const locationTitle = isArea ? `${location.name}, Prayagraj` : location.name;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <StructuredData type="localBusiness" location={locationTitle} />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-600 to-red-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              JCB Rental Services in <span className="text-yellow-300">{locationTitle}</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              {location.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:9559394527" 
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105"
              >
                📞 Call Now: 95593 94527
              </a>
              <a 
                href="https://wa.me/919559394527?text=Hi, I need JCB rental services in ${locationTitle}" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105"
              >
                💬 WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Our JCB Services in <span className="text-orange-600">{locationTitle}</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Excavation Services",
                description: `Professional excavation and digging services in ${locationTitle} for foundations, basements, and site preparation.`,
                icon: "🏗️",
                features: ["Foundation Digging", "Site Preparation", "Basement Excavation", "Trenching"]
              },
              {
                title: "Road Construction",
                description: `Expert road construction and repair services in ${locationTitle} using modern JCB equipment.`,
                icon: "🛣️",
                features: ["Road Building", "Surface Repair", "Highway Construction", "Path Creation"]
              },
              {
                title: "Demolition Work",
                description: `Safe and efficient demolition services in ${locationTitle} for buildings and structures.`,
                icon: "🏚️",
                features: ["Building Demolition", "Structure Removal", "Site Clearance", "Debris Removal"]
              },
              {
                title: "Earthmoving",
                description: `Comprehensive earthmoving and land preparation services in ${locationTitle}.`,
                icon: "⛰️",
                features: ["Land Leveling", "Soil Moving", "Grading", "Landscaping"]
              },
              {
                title: "Construction Support",
                description: `Complete construction support services in ${locationTitle} with reliable JCB equipment.`,
                icon: "🏢",
                features: ["Material Handling", "Site Support", "Equipment Rental", "Project Assistance"]
              },
              {
                title: "Emergency Services",
                description: `24/7 emergency JCB services in ${locationTitle} for urgent construction needs.`,
                icon: "🚨",
                features: ["24/7 Availability", "Emergency Response", "Urgent Repairs", "Quick Deployment"]
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Info Section */}
      {location.landmarks && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              We Serve Near These Landmarks in {locationTitle}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {location.landmarks.map((landmark, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">📍</span>
                    <span className="font-semibold text-gray-800">{landmark}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Why Choose Our JCB Services in {locationTitle}?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "⚡", title: "Quick Response", desc: "Fast deployment within 30 minutes" },
              { icon: "🔧", title: "Expert Operators", desc: "Skilled and experienced JCB operators" },
              { icon: "💰", title: "Competitive Rates", desc: "Best prices in the market" },
              { icon: "🛡️", title: "Fully Insured", desc: "Complete insurance coverage" }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Book JCB Services in {locationTitle}?
          </h2>
          <p className="text-xl mb-8">
            Contact us now for immediate JCB rental and construction equipment services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:9559394527" 
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              📞 Call: 95593 94527
            </a>
            <a 
              href={`https://wa.me/919559394527?text=Hi, I need JCB rental services in ${locationTitle}`}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
            >
              💬 WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      {/* Related Locations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Other Areas We Serve
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {allLocations
              .filter(loc => loc.slug !== location.slug)
              .slice(0, 8)
              .map((loc) => (
                <Link 
                  key={loc.slug} 
                  href={`/location/${loc.slug}`}
                  className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:bg-orange-50 text-center"
                >
                  <h3 className="font-semibold text-gray-800 hover:text-orange-600">
                    {loc.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    JCB Services Available
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}